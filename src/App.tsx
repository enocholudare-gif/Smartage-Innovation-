import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { UnitCalculatorModal } from './components/UnitCalculatorModal';
import { DetailModal } from './components/DetailModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { InteriorSolutionsPage } from './pages/InteriorSolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CompliancePage } from './pages/CompliancePage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { ContactPage } from './pages/ContactPage';
import { MachinesPage } from './pages/MachinesPage';
import { WoodAccessoriesPage } from './pages/WoodAccessoriesPage';
import { NewsPage } from './pages/NewsPage';
import { CareersPage } from './pages/CareersPage';
import { GalleryPage } from './pages/GalleryPage';

import { PageId, Product, QuoteItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [productsCategory, setProductsCategory] = useState<string>('All');

  // RFQ Basket Items
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('silvaflex_rfq_basket');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal States
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);

  // Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Save quote basket to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('silvaflex_rfq_basket', JSON.stringify(quoteItems));
    } catch {
      // ignore
    }
  }, [quoteItems]);

  // Handler to add item to RFQ basket
  const handleAddToQuote = (item: Product) => {
    setQuoteItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [
          ...prev,
          {
            id: item.id,
            type: 'product',
            title: item.name,
            codeOrCategory: item.category,
            image: item.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    setQuoteItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
    );
  };

  const handleRemoveQuoteItem = (id: string) => {
    setQuoteItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const handleNavigate = (page: PageId, category?: string) => {
    setCurrentPage(page);
    if (category) {
      if (page === 'products') {
        setProductsCategory(category);
      }
    } else {
      if (page === 'products') {
        setProductsCategory('All');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 flex flex-col justify-between font-sans selection:bg-[#8B5A2B] selection:text-white">
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        quoteCount={quoteItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onOpenCalculatorModal={() => setIsCalculatorModalOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToQuote={(p) => handleAddToQuote(p)}
            onOpenCalculatorModal={() => setIsCalculatorModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            initialCategory={productsCategory}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToQuote={(p) => handleAddToQuote(p)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'machines' && (
          <MachinesPage
            onAddToQuote={(item) => handleAddToQuote(item as Product)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'wood-accessories' && (
          <WoodAccessoriesPage
            onAddToQuote={(item) => handleAddToQuote(item as Product)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'careers' && (
          <CareersPage />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage />
        )}

        {currentPage === 'interior-solutions' && (
          <InteriorSolutionsPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'compliance' && (
          <CompliancePage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'sustainability' && (
          <SustainabilityPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'downloads' && (
          <DownloadsPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Utility Modals & Drawers */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearQuote={handleClearQuote}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onNavigate={handleNavigate}
      />

      <UnitCalculatorModal
        isOpen={isCalculatorModalOpen}
        onClose={() => setIsCalculatorModalOpen(false)}
      />

      <DetailModal
        product={selectedProduct}
        machine={null}
        onClose={() => {
          setSelectedProduct(null);
        }}
        onAddToQuote={(p) => handleAddToQuote(p as Product)}
      />
    </div>
  );
}

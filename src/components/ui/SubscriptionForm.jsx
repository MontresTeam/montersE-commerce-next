import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import subscrptionImage from '../../assets/ChatGPT Image Aug 16, 2025, 09_54_02 AM.png'
import Image from 'next/image';

if (typeof window !== 'undefined') {
  Modal.setAppElement("#root");
}

const SubscriptionModal = ({ triggerType = 'timer', delay = 5000 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (triggerType === 'timer') {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [triggerType, delay]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email, subscribe });
    setIsOpen(false);
    localStorage.setItem('subscribed', 'true');
  };

  if (typeof window !== 'undefined' && localStorage.getItem('subscribed')) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Summer Sale Subscription"
      className="modal-content"
      overlayClassName="modal-overlay"
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl border border-gray-100 relative flex flex-col md:flex-row h-auto max-h-[90vh] md:h-[70vh]">
        {/* Banner Image - Full Height on Desktop */}
        <div className="hidden md:block md:w-1/2 h-full bg-orange-100 rounded-l-lg overflow-hidden">
          <Image
            src={subscrptionImage}
            alt="Summer Sale"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Content Section - Scrollable if needed */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Close modal"
          >
            ✕
          </button>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 uppercase tracking-wide">Summer</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 uppercase tracking-wide">Sale</h2>
            <p className="text-lg md:text-xl font-semibold text-gray-700 uppercase tracking-tight">Save up to</p>
            <p className="text-4xl md:text-5xl font-bold text-red-600 my-2">30%</p>
            <p className="text-lg md:text-xl font-semibold text-gray-700 uppercase tracking-tight">Off</p>
            <p className="text-sm text-gray-500 mt-2 uppercase">in stores & online</p>
          </div>
          
          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                Get exclusive deals delivered to your inbox
              </label>
              <input
                type="email"
                id="modal-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="modal-subscribe"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="modal-subscribe" className="ml-2 block text-sm text-gray-700">
                I want to receive updates and promotions
              </label>
            </div>
            
            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md shadow-md transition duration-300"
              >
                Subscribe Now
              </button>
              
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300"
              >
                No thanks, I'll pass
              </button>
            </div>
          </form>
          
          <p className="mt-4 text-xs text-gray-500 text-center">
            *By subscribing you agree to our terms. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Global Styles for Modal */}
      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-content {
          position: relative;
          background: transparent;
          border: none;
          padding: 0;
          width: 100%;
          max-width: 800px;
          outline: none;
          margin: 20px;
          height: auto;
        }

        /* Mobile styles */
        @media (max-width: 767px) {
          .modal-content {
            max-height: 90vh;
          }
          
          .modal-content > div {
            max-height: 90vh;
            overflow-y: auto;
          }
        }

        /* Desktop styles */
        @media (min-width: 768px) {
          .modal-content > div {
            height: 70vh;
            min-height: 500px;
            max-height: 700px;
          }
        }
      `}</style>
    </Modal>
  );
};

export default SubscriptionModal;
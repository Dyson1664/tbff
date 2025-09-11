import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/common/Footer';

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tripTitle = searchParams.get('trip') || 'Trip';

  useEffect(() => {
    // Load Shopify Buy Button script
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function initShopify() {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    }

    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      document.head.appendChild(script);
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'z2axru-xu.myshopify.com',
        storefrontAccessToken: 'a3e089c12a02e1ba0899f8eb55ee0c59',
      });
      
      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent('product', {
          id: '8330841817267',
          node: document.getElementById('product-component-1757529370681'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-family": "Roboto, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#0BA29C"
                  },
                  "background-color": "#0FC2BF",
                  ":focus": {
                    "background-color": "#0BA29C"
                  },
                  "border-radius": "24px",
                  "padding-left": "55px",
                  "padding-right": "55px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                }
              },
              "buttonDestination": "checkout",
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "Book Now"
              },
              "googleFonts": [
                "Roboto"
              ]
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Roboto, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#0BA29C"
                  },
                  "background-color": "#0FC2BF",
                  ":focus": {
                    "background-color": "#0BA29C"
                  },
                  "border-radius": "24px",
                  "padding-left": "55px",
                  "padding-right": "55px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                }
              },
              "googleFonts": [
                "Roboto"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Roboto, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#0BA29C"
                  },
                  "background-color": "#0FC2BF",
                  ":focus": {
                    "background-color": "#0BA29C"
                  },
                  "border-radius": "24px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Roboto"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Roboto, sans-serif",
                  "background-color": "#0FC2BF",
                  ":hover": {
                    "background-color": "#0BA29C"
                  },
                  ":focus": {
                    "background-color": "#0BA29C"
                  }
                },
                "count": {
                  "font-size": "16px"
                }
              },
              "googleFonts": [
                "Roboto"
              ]
            }
          },
        });
      });
    }

    initShopify();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-primary hover:text-primary/80 mb-4"
            >
              ← Back
            </button>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Complete Your Booking
            </h1>
            <p className="text-muted-foreground">
              You're just one step away from your amazing {tripTitle} adventure!
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {tripTitle}
              </h2>
              <p className="text-muted-foreground">
                Secure checkout powered by Shopify
              </p>
            </div>
            
            <div className="flex justify-center">
              <div id='product-component-1757529370681'></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
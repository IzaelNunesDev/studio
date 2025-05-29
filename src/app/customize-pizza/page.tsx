import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings2, Pizza, ShoppingCart } from 'lucide-react';

export default function CustomizePizzaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader className="text-center">
             <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-4 mb-4 mx-auto">
              <Pizza size={40} />
            </div>
            <CardTitle className="text-4xl font-extrabold text-primary">Customize Your Pizza</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Craft your perfect pizza from scratch! Choose your crust, sauce, cheese, and toppings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Placeholder for customization options */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">1. Choose Your Crust</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Thin Crust', 'Hand-Tossed', 'Stuffed Crust'].map(crust => (
                    <Button key={crust} variant="outline" className="py-6 text-base">{crust}</Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">2. Select Your Sauce</h3>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Classic Tomato', 'Spicy Marinara', 'Creamy Garlic'].map(sauce => (
                    <Button key={sauce} variant="outline" className="py-6 text-base">{sauce}</Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">3. Add Your Toppings</h3>
                <p className="text-muted-foreground mb-4">Select as many as you like!</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['Pepperoni', 'Mushrooms', 'Onions', 'Bell Peppers', 'Olives', 'Sausage', 'Bacon', 'Pineapple'].map(topping => (
                     <Button key={topping} variant="outline" className="py-3 text-sm">{topping}</Button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-border pt-6 text-center">
                 <img src="https://placehold.co/700x300.png" alt="Pizza customization visual" data-ai-hint="pizza creation" className="mb-6 rounded-lg shadow-md mx-auto" />
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8">
                  <ShoppingCart size={20} className="mr-2" /> Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

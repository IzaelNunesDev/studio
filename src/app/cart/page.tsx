import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CreditCard } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4 mx-auto">
              <ShoppingCart size={32} />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">Your Shopping Cart</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-lg text-muted-foreground mb-6">
              Your cart is currently empty. Start adding some delicious items from our menu!
            </CardDescription>
            <img src="https://placehold.co/500x250.png" alt="Empty shopping cart" data-ai-hint="empty cart" className="mb-8 rounded-lg shadow-md mx-auto" />
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <CreditCard size={20} className="mr-2" />
              Proceed to Checkout (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

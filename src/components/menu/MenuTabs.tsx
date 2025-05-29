"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuItemCard from './MenuItemCard';
import { menuItems } from '@/data/menu';
import type { MenuCategory, MenuItem } from '@/types';
import { Pizza, Drumstick, CupSoda, CakeSlice } from 'lucide-react'; // Using CakeSlice for Desserts

const categoryIcons: Record<MenuCategory, React.ElementType> = {
  pizza: Pizza,
  sides: Drumstick,
  drinks: CupSoda,
  desserts: CakeSlice,
};

const categoryLabels: Record<MenuCategory, string> = {
  pizza: 'Pizza',
  sides: 'Sides',
  drinks: 'Drinks',
  desserts: 'Desserts',
};

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('pizza');

  const categories: MenuCategory[] = ['pizza', 'sides', 'drinks', 'desserts'];

  const getItemsForCategory = (category: MenuCategory): MenuItem[] => {
    return menuItems.filter(item => item.category === category);
  };

  return (
    <Tabs defaultValue="pizza" value={activeTab} onValueChange={(value) => setActiveTab(value as MenuCategory)} className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 mb-6 bg-transparent p-0">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          return (
            <TabsTrigger 
              key={category} 
              value={category} 
              className="py-3 text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
            >
              <Icon size={20} className="mr-2 hidden sm:inline-block" />
              {categoryLabels[category]}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          {getItemsForCategory(category).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getItemsForCategory(category).map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">No items in this category yet. Check back soon!</p>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}

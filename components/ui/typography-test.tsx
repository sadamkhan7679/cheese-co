import React from "react";

export const TypographyTest = () => {
  return (
    <div className="container mx-auto py-12 space-y-8">
      <h2 className="font-bokor">
        Bokor Font Family - AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </h2>

      <div>
        <h2 className="text-2xl font-bold mb-4">Cocogoose Font Family</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <p className="font-regular mb-2">
              Regular - Cocogoose Classic Demo Regular
            </p>
            <p className="font-cocogoose font-regular mb-2">
              Regular - Cocogoose Classic Demo Regular
            </p>
            <p className="font-cocogoose font-regular italic mb-2">
              Regular Italic - Cocogoose Classic Demo Italic
            </p>
            <p className="font-cocogoose font-medium mb-2">
              Medium - Cocogoose Classic Medium
            </p>
            <p className="font-cocogoose font-bold mb-2">
              Bold - Cocogoose Classic Bold
            </p>
            <p className="font-cocogoose font-bold italic mb-2">
              Bold Italic - Cocogoose Classic Bold Italic
            </p>
            <p className="font-cocogoose font-extrabold">
              ExtraBold - Cocogoose Classic ExtraBold
            </p>
          </div>
          <div className="p-4 border rounded-md">
            <p className="font-sans text-2xl font-regular mb-2">Regular 2xl</p>
            <p className="font-cocogoose text-2xl font-medium mb-2">
              Medium 2xl
            </p>
            <p className="font-cocogoose text-2xl font-bold mb-2">Bold 2xl</p>
            <p className="font-cocogoose text-2xl font-extrabold">
              ExtraBold 2xl
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Playfair Display Font Family
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <p className="font-playfair font-regular mb-2">
              Regular - Playfair Display Regular
            </p>
            <p className="font-playfair font-regular italic mb-2">
              Regular Italic - Playfair Display Italic
            </p>
            <p className="font-playfair font-medium mb-2">
              Medium - Playfair Display Medium
            </p>
            <p className="font-playfair font-medium italic mb-2">
              Medium Italic - Playfair Display Medium Italic
            </p>
            <p className="font-playfair font-semibold mb-2">
              SemiBold - Playfair Display SemiBold
            </p>
            <p className="font-playfair font-semibold italic mb-2">
              SemiBold Italic - Playfair Display SemiBold Italic
            </p>
            <p className="font-playfair font-bold mb-2">
              Bold - Playfair Display Bold
            </p>
            <p className="font-playfair font-bold italic mb-2">
              Bold Italic - Playfair Display Bold Italic
            </p>
            <p className="font-playfair font-extrabold mb-2">
              ExtraBold - Playfair Display ExtraBold
            </p>
            <p className="font-playfair font-extrabold italic mb-2">
              ExtraBold Italic - Playfair Display ExtraBold Italic
            </p>
            <p className="font-playfair font-black mb-2">
              Black - Playfair Display Black
            </p>
            <p className="font-playfair font-black italic">
              Black Italic - Playfair Display Black Italic
            </p>
          </div>
          <div className="p-4 border rounded-md">
            <p className="font-serif text-2xl font-regular mb-2">Regular 2xl</p>
            <p className="font-serif text-2xl font-medium mb-2">Medium 2xl</p>
            <p className="font-serif text-2xl font-semibold mb-2">
              SemiBold 2xl
            </p>
            <p className="font-serif text-2xl font-bold mb-2">Bold 2xl</p>
            <p className="font-serif text-2xl font-extrabold mb-2">
              ExtraBold 2xl
            </p>
            <p className="font-serif text-2xl font-black">Black 2xl</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Playfair Display Variable Font
        </h2>
        <div className="p-4 border rounded-md">
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 100 }}
          >
            Weight 100
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 200 }}
          >
            Weight 200
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 300 }}
          >
            Weight 300
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 400 }}
          >
            Weight 400
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 500 }}
          >
            Weight 500
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 600 }}
          >
            Weight 600
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 700 }}
          >
            Weight 700
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 800 }}
          >
            Weight 800
          </p>
          <p
            className="font-serif-variable text-2xl"
            style={{ fontWeight: 900 }}
          >
            Weight 900
          </p>
        </div>
      </div>
    </div>
  );
};

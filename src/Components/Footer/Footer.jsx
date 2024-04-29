import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
<footer class="bg-gray-900 text-white py-8">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div class="flex items-center justify-center md:col-span-1">

        <h1>ChillTrip</h1>
        {/* <img src="logo.png" alt="Logo" class="w-24"/> */}
      </div>

    
      <div class="md:col-span-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h5 class="font-semibold mb-2">Company</h5>
            <ul>
              <li><a href="#" class="hover:text-gray-400">About Us</a></li>
              <li><a href="#" class="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" class="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-2">Products</h5>
            <ul>
              <li><a href="#" class="hover:text-gray-400">WanderlustExplorer Travel Backpack
</a></li>
              <li><a href="#" class="hover:text-gray-400">AdventureSeeker Hiking Boots
</a></li>
              <li><a href="#" class="hover:text-gray-400">HorizonView Binoculars
</a></li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-2">Legal</h5>
            <ul>
              <li><a href="#" class="hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#" class="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-gray-400">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-8">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;
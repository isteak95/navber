import React from 'react';

const Reviews = () => {
    return (
        <div>
            <div class="bg-gray-100 py-12">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Customer Reviews</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img class="object-cover w-full h-full" src="https://i.ibb.co/5WRL1Jp/OIP-2.jpg" alt="Customer Avatar"/>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">NUR</h3>
            <p class="text-sm text-gray-500">5/5 Stars</p>
          </div>
        </div>
        <p class="text-gray-700">"Absolutely loved my experience! The scenery was breathtaking and the tour guide was incredibly knowledgeable. Would highly recommend this destination to anyone looking for a memorable vacation."</p>
      </div>

      
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img class="object-cover w-full h-full" src="https://i.ibb.co/5WRL1Jp/OIP-2.jpg" alt="Customer Avatar"/>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Jane Smith</h3>
            <p class="text-sm text-gray-500">4/5 Stars</p>
          </div>
        </div>
        <p class="text-gray-700">"Had a great time exploring the local culture and attractions. The accommodations were comfortable and the food was delicious. Only downside was the weather, but that's out of anyone's control!"</p>
      </div>

      
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img class="object-cover w-full h-full" src="https://i.ibb.co/5WRL1Jp/OIP-2.jpg" alt="Customer Avatar"/>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Alex Johnson</h3>
            <p class="text-sm text-gray-500">3/5 Stars</p>
          </div>
        </div>
        <p class="text-gray-700">"Overall, it was a decent trip. Some parts were enjoyable, but others felt a bit overhyped. Might consider trying a different destination next time."</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Reviews;
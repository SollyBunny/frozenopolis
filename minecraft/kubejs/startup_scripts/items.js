priority: 0;

StartupEvents.registry("item", (event) => {
  // Cooked Fruit (Provides Ice Resistance)
  event
    .create("frozenopolis:cooked_fruit")
    .displayName("Cooked Fruit")
    .tooltip("§2When Eaten: §7Provides §bIce Resistance§r");

  // Bowl of Ice
  event.create("frozenopolis:bowl_of_ice").displayName("Bowl of Ice");

  // Bowl Of Snow
  event.create("frozenopolis:bowl_of_snow").displayName("Bowl of Snow");

  // Weather Catalyst
  event
    .create("frozenopolis:weather_catalyst")
    .displayName("Weather Catalyst")
    .maxStackSize(1)
    .glow(true);
});

ItemEvents.modification((event) => {
  // Snowball -> Stack Size 64
  event.modify("minecraft:snowball", (item) => {
    item.maxStackSize = 64;
  });

  // Cooked Fruit -> Food Properties + Ice Resistance for 20 seconds
  event.modify("frozenopolis:cooked_fruit", (item) => {
    item.setFoodProperties((food) => {
      food.effect("toughasnails:ice_resistance", 20 * 20, 0, 1);
      food.saturation(0.8);
      food.alwaysEdible();
      food.fastToEat();
      food.hunger(4);
    });
  });

  // Snow Bowl -> Food Properties
  event.modify("frozenopolis:bowl_of_snow", (item) => {
    item.setFoodProperties((food) => {
      food.effect("cofh_core:chilled", 20 * 2, 0, 1);
      food.saturation(0.64);
      food.fastToEat();
      food.hunger(2);
      //food.alwaysEdible();
    });
  });
});

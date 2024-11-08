
// priority: 100;

ServerEvents.recipes((event) => {

    
  // water crystal
  event
  .shaped("4x elementalcraft:watercrystal", [" C ", "CWC", " C "], { W: 'elementalcraft:contained_crystal', C:'minecraft:water_bucket' })
  .id("frozenopolis:water_crystal");
  // fire crystal
  event
  .shaped("2x elementalcraft:firecrystal", ["BCB", "CWC", "BCB"], { C: 'elementalcraft:drenched_iron_ingot', W:'minecraft:lava_bucket', B: 'minecraft:blaze_powder' })
  .id("frozenopolis:fire_crystal");
  // earth crystal
  event
  .shaped("2x elementalcraft:earthcrystal", ["BCB", "CWC", "BCB"], { C: 'elementalcraft:drenched_iron_ingot', W:'minecraft:grass_block', B: 'minecraft:dirt' })
  .id("frozenopolis:earth_crystal");
  // air crystal
  event
  .shaped("2x elementalcraft:aircrystal", ["BCB", "CWC", "BCB"], { C: 'elementalcraft:drenched_iron_ingot', W:'minecraft:glass_bottle', B: 'minecraft:glass' })
  .id("frozenopolis:air_crystal");

  event
  .custom({
    "type": "elementalcraft:infusion",
    "element_amount": 250,
    "element_type": "water",
    "input": {
      "item": "elementalcraft:water_shard"
    },
    "output": {
      "item": "minecraft:amethyst_shard"
    }
  })
  .id("frozenopolis:amethyst_shard");


});

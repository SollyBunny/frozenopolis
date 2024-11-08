ServerEvents.recipes((event) => {
  event.remove({ type: "thermal:crucible", input: "netherrack" });

  event.remove({ id: "/rock_gen//" });

  event.replaceInput(
    { output: "thermal:machine_crucible" },
    "minecraft:nether_bricks",
    "iceopolis:ice_bricks"
  );

  // Ice to ice shard

  event.recipes.thermal.pulverizer('2x iceopolis:ice_shard', 'minecraft:ice')
  event.recipes.thermal.pulverizer('4x iceopolis:ice_shard', 'minecraft:packed_ice')
  event.recipes.thermal.pulverizer('8x iceopolis:ice_shard', 'minecraft:blue_ice')

  //cobblestone less power

  event.custom({
    type: "thermal:crucible",
    ingredient: {
      item: "minecraft:cobblestone"
    },
    "result": [
      {
        fluid: "minecraft:lava",
        amount: 1000
      }
    ],
    energy: 100000
  }).id('thermal:machines/crucible/crucible_cobblestone_to_lava')

  // molten netherrack
  event.custom({
    type: "thermal:crucible",
    ingredient: {
      item: "minecraft:netherrack",
    },
    result: [
      {
        fluid: "frozenopolis:molten_netherrack",
        amount: 1000,
      },
    ],
    energy: 2400,
  });

  // frozen netherrack
  event.custom({
    type: "thermal:chiller",
    ingredients: [
      {
        fluid: "frozenopolis:molten_netherrack",
        amount: 1000,
      },
      {
        item: "iceopolis:ice_shard",
      },
    ],
    result: [
      {
        item: "frozenopolis:frozen_netherrack",
        count: 1,
      },
    ],
    energy: 2400,
  });

  // igneous extruder recipe for ores

  function extrude(adjacent, below, result) {
    event
      .custom({
        type: "thermal:rock_gen",
        adjacent: adjacent,
        below: below,
        result: {
          item: result,
        },
      })
  }

  //lava from nether bricks
  event.custom({
    "type": "thermal:crucible",
    "ingredient": {
      "item": "minecraft:nether_brick"
    },
    "result": [
      {
        "fluid": "minecraft:lava",
        "amount": 100
      }
    ],
    "energy": 200
  }).id('frozenopolis:lava_from_netherrack')

  // iron
  extrude(
    "minecraft:iron_block",
    "frozenopolis:frozen_diorite",
    "frozenopolis:frozen_iron_ore"
  );

  // silver
  extrude(
    "thermal:silver_block",
    "frozenopolis:frozen_diorite",
    "frozenopolis:frozen_silver_ore"
  );

  // nickel
  extrude(
    "thermal:nickel_block",
    "frozenopolis:frozen_granite",
    "frozenopolis:frozen_nickel_ore"
  );

  // copper
  extrude(
    "minecraft:copper_block",
    "frozenopolis:frozen_granite",
    "frozenopolis:frozen_copper_ore"
  );

  // copper 3
  extrude(
    "minecraft:waxed_copper_block",
    "frozenopolis:frozen_granite",
    "frozenopolis:frozen_copper_ore"
  );

  // redstone
  extrude(
    "minecraft:redstone_block",
    "frozenopolis:frozen_granite",
    "frozenopolis:frozen_redstone_ore"
  );

  // lead
  extrude(
    "thermal:lead_block",
    "frozenopolis:frozen_andesite",
    "frozenopolis:frozen_lead_ore"
  );

  // tin
  extrude(
    "thermal:tin_block",
    "frozenopolis:frozen_andesite",
    "frozenopolis:frozen_tin_ore"
  );

  // coal
  extrude(
    "minecraft:coal_block",
    "frozenopolis:frozen_deepslate",
    "frozenopolis:frozen_deepslate_coal_ore"
  );

  // lapis
  extrude(
    "minecraft:lapis_block",
    "frozenopolis:frozen_deepslate",
    "frozenopolis:frozen_deepslate_lapis_ore"
  );

  // niter
  extrude(
    "thermal:niter_block",
    "frozenopolis:frozen_stone",
    "frozenopolis:frozen_niter_ore"
  );

  // cinnabar
  extrude(
    "thermal:cinnabar_block",
    "frozenopolis:frozen_stone",
    "frozenopolis:frozen_cinnabar_ore"
  );

  // apatite
  extrude(
    "thermal:apatite_block",
    "frozenopolis:frozen_stone",
    "frozenopolis:frozen_apatite_ore"
  );

  // sulfur
  extrude(
    "thermal:sulfur_block",
    "frozenopolis:frozen_stone",
    "frozenopolis:frozen_sulfur_ore"
  );

  // TODO: add nether ores + inert crystals
});

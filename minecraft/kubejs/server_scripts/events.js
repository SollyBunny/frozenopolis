// priority: 0

ServerEvents.loaded((event) => {
  event.server.runCommandSilent("reload");
});

BlockEvents.rightClicked((event) => {
  const { player, block } = event;
  let item = player.getOffHandItem();
  let block_name = block.id.toString().replace("minecraft:", "");

  if (block.hasTag("forge:stone")) {
    if (item.id === "iceopolis:sharpend_ice") {
      item.setCount(item.getCount() - 1);
      event.server.runCommandSilent(
        `setblock ${block.pos.x} ${block.pos.y} ${block.pos.z} frozenopolis:frozen_${block_name}`
      );
      event.server.runCommandSilent(
        `playsound minecraft:block.glass.break block @a ~ ~ ~ 1 0.75`
      );
    }
  } else if (block.hasTag("frozenopolis:ice")) {
    if (item.id === "iceopolis:ice_chisel") {
      item.hurtAndBreak(1, player, (entity) => {});
    }
  }
});


BlockEvents.rightClicked("frozenopolis:weather_changer", (event) => {
  const { player, block } = event;
  let item = player.getMainHandItem();
  if (item.id === "frozenopolis:weather_catalyst") {
    event.server.runCommandSilent(`weather clear 5000`);
    event.server.runCommandSilent(
      `summon minecraft:lightning_bolt ${block.pos.x} ${block.pos.y + 1} ${
        block.pos.z
      }`
    );
    item.setCount(item.getCount() - 1);
  }
});

// on join ->
PlayerEvents.loggedIn((event) => {
  const { player, server } = event;
  // Check if player doesn't have "first_time" stage yet
  if (!player.stages.has("first_time")) {
    // Check if the player has an empty boots slot
    if (player.feetArmorItem === null) {
      // Set the player's boots slot to the leather boots item
      player.feetArmorItem = Item.of("minecraft:leather_boots");
    } else {
      player.drop(Item.of("minecraft:leather_boots"));
    }

    // give the quest book to the player
    player.give("ftbquests:book");

    // disable sendCommandFeedback
    // server.runCommandSilent("gamerule sendCommandFeedback false");

    // Add the stage
    player.stages.add("first_time");
  }
});



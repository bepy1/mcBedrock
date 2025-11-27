import { world, Player, ItemStack, ItemTypes, EntityInventoryComponent, EnchantmentTypes } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event) => {
  const player: Player = event.player;
  const inventory = player.getComponent("inventory") as EntityInventoryComponent;
  let woolColorPicker = Math.floor(Math.random() * 16);
  const woolColors = [
    "white_wool",
    "orange_wool",
    "magenta_wool",
    "light_blue_wool",
    "yellow_wool",
    "lime_wool",
    "pink_wool",
    "gray_wool",
    "light_gray_wool",
    "cyan_wool",
    "purple_wool",
    "blue_wool",
    "brown_wool",
    "green_wool",
    "red_wool",
    "black_wool",
  ];

  if (!inventory || !inventory.container) {
    player.sendMessage("§cno work :<");
    return;
  }

  const tool = new ItemStack(ItemTypes.get("minecraft:shears")!, 1);
  const toolEnchantable = tool.getComponent("enchantable");
  if (toolEnchantable) {
    toolEnchantable.addEnchantment({ type: EnchantmentTypes.get("unbreaking")!, level: 3 });
    toolEnchantable.addEnchantment({ type: EnchantmentTypes.get("efficiency")!, level: 5 });
  }
  inventory.container.setItem(0, tool);

  const bow = new ItemStack(ItemTypes.get("minecraft:bow")!, 1);
  const bowEnchantable = bow.getComponent("enchantable");
  if (bowEnchantable) {
    bowEnchantable.addEnchantment({ type: EnchantmentTypes.get("unbreaking")!, level: 3 });
    bowEnchantable.addEnchantment({ type: EnchantmentTypes.get("punch")!, level: 2 });
    bowEnchantable.addEnchantment({ type: EnchantmentTypes.get("infinity")!, level: 1 });
  }
  inventory.container.setItem(1, bow);

  const woolBlocks = new ItemStack(ItemTypes.get(`minecraft:${woolColors[woolColorPicker]}`)!, 64);
  inventory.container.setItem(2, woolBlocks);

  const food = new ItemStack(ItemTypes.get("minecraft:golden_carrot")!, 64);
  inventory.container.setItem(8, food);

  const arrow = new ItemStack(ItemTypes.get("minecraft:arrow")!, 1);
  inventory.container.setItem(17, arrow);

  player.sendMessage("§atake wool :O");
});

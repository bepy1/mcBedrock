import { world, ItemStack, ItemTypes, EnchantmentTypes, } from "@minecraft/server";
world.afterEvents.playerSpawn.subscribe((event) => {
    const player = event.player;
    const inventory = player.getComponent("inventory");
    if (!inventory || !inventory.container) {
        player.sendMessage("§cError: Could not access inventory");
        return;
    }
    const blocks = new ItemStack(ItemTypes.get("minecraft:wool"), 64);
    inventory.container.setItem(2, blocks);
    const bow = new ItemStack(ItemTypes.get("minecraft:bow"), 1);
    const bowEnchantable = bow.getComponent("enchantable");
    if (bowEnchantable) {
        bowEnchantable.addEnchantment({ type: EnchantmentTypes.get("unbreaking"), level: 3 });
        bowEnchantable.addEnchantment({ type: EnchantmentTypes.get("power"), level: 5 });
        bowEnchantable.addEnchantment({ type: EnchantmentTypes.get("infinity"), level: 1 });
    }
    inventory.container.setItem(0, bow);
    const food = new ItemStack(ItemTypes.get("minecraft:golden_carrot"), 64);
    inventory.container.setItem(8, food);
    const shears = new ItemStack(ItemTypes.get("minecraft:shears"), 1);
    const shearsEnchantable = shears.getComponent("enchantable");
    if (shearsEnchantable) {
        shearsEnchantable.addEnchantment({ type: EnchantmentTypes.get("unbreaking"), level: 3 });
        shearsEnchantable.addEnchantment({ type: EnchantmentTypes.get("efficiency"), level: 5 });
    }
    inventory.container.setItem(1, shears);
    const arrows = new ItemStack(ItemTypes.get("minecraft:arrow"), 1);
    inventory.container.setItem(17, arrows);
    player.sendMessage("§atake things");
});
//# sourceMappingURL=main.js.map
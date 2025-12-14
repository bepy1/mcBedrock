import {
  world,
  system,
  Entity,
  Player,
  ItemStack,
  ItemTypes,
  EntityInventoryComponent,
  EnchantmentTypes,
  Vector3,
  VectorXZ,
  BlockTypes,
} from "@minecraft/server";

function getPlayerForwardDirection(player: Player) {
  const rotation = player.getRotation();
  const yaw = rotation.y * (Math.PI / 180);
  const pitch = rotation.x * (Math.PI / 180);

  const x = -Math.sin(yaw) * Math.cos(pitch);
  const z = Math.cos(yaw) * Math.cos(pitch);

  return { x, z };
}

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const location = player.location;
    const direction = getPlayerForwardDirection(player);
    const blockBelow = player.dimension.getBlock({
      x: location.x,
      y: location.y + 0.9325,
      z: location.z,
    });

    if (blockBelow && blockBelow.typeId === "minecraft:red_carpet") {
      player.applyKnockback({ x: direction.x * 7, z: direction.z * 7 }, 1.25);
    }
    if (blockBelow && blockBelow.typeId === "minecraft:lime_carpet") {
      player.applyKnockback({ x: 0, z: 0 }, 3);
    }
  }
});

/*
function knockbackEveryFiveSeconds() {
  const players = world.getPlayers();
  for (const player of players) {
    if (system.currentTick % 100 === 0) {
      player.applyKnockback({ x: 0, z: 0 }, 0.5);
    }
  }
  system.run(knockbackEveryFiveSeconds);
}

system.run(knockbackEveryFiveSeconds);
*/

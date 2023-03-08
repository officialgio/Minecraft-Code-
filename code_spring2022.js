player.onChat("line", function () {
    builder.line(GRASS)
})
mobs.onMobKilled(SQUID, function () {
    if (isSwimming == 1) {
        mobs.give(
        mobs.target(NEAREST_PLAYER),
        DIAMOND_BLOCK,
        1
        )
    }
})
player.onTravelled(SWIM_WATER, function () {
    isSwimming = 0
})
player.onChat("fill", function () {
    builder.fill(END_PORTAL)
})
player.onChat("Superrun", function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 10, 39)
})
player.onChat("test", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 4; index++) {
            agent.setItem(LOG_OAK, 64, 1)
            agent.move(FORWARD, 4)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
    }
})
player.onTravelled(WALK, function () {
    isSwimming = 1
})
loops.forever(function () {
    if (blocks.testForBlock(GRASS, pos(0, -1, 0))) {
        mobs.spawn(list._pickRandom(), pos(0, 0, 0))
    }
})
player.onChat("enchant", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_SWORD,
    1
    )
    mobs.enchant(
    mobs.target(NEAREST_PLAYER),
    "Sharpness",
    1
    )
})
player.onChat("Sort", function () {
    let text_list: string[] = []
    gameplay.title(mobs.target(ALL_PLAYERS), text_list._pickRandom(), "")
})
player.onChat("trace", function () {
    builder.tracePath(SMOOTH_SANDSTONE)
})
player.onChat("mark", function () {
    builder.mark()
})
player.onItemInteracted(STICK, function () {
    for (let index = 0; index < 10; index++) {
        mobs.spawn(Mobs._pickRandom(), positions.groundPosition(posCamera(0, 0, randint(10, 20))))
    }
})
let isSwimming = 0
let Mobs: number[] = []
let list: number[] = []
list = [
CHICKEN,
COW,
PIG,
SHEEP
]
Mobs = [PRIMED_TNT, LIGHTNING_BOLT, FIREWORKS_ROCKET]

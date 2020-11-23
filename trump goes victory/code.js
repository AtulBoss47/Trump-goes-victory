var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["371c671a-4d1b-49f0-9e9f-ea497d362377","b86fd9b9-16ad-4fcc-a94f-0509b7e43790","b1738bc0-a156-4fde-8509-22e06ebb7916","6eeb4619-294f-44b7-ae15-926eff3a4e6f","6b989b4a-0c9c-4fdc-bc00-d302105641f5","6b9469bb-f33d-4640-8f13-5c75f996d572","e4238bfe-5628-4ce1-9734-d001b1fb11ab","ab6e5c50-990d-4203-bac0-2e7f3dc417e5","bd0d8ef2-4f70-430f-92e5-200c46af8d83","f9c3607a-130f-48a3-be3b-c9c7dcb060df","3823081a-d1b2-4bb5-86f8-ca98c366d028"],"propsByKey":{"371c671a-4d1b-49f0-9e9f-ea497d362377":{"name":"donald_trump_2","sourceUrl":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/371c671a-4d1b-49f0-9e9f-ea497d362377.png","frameSize":{"x":600,"y":432},"frameCount":1,"looping":true,"frameDelay":4,"version":"lByvBfvIO_h_fUc.CNRH9s_l6RxDcugU","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":432},"rootRelativePath":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/371c671a-4d1b-49f0-9e9f-ea497d362377.png"},"b86fd9b9-16ad-4fcc-a94f-0509b7e43790":{"name":"donald 1","sourceUrl":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/b86fd9b9-16ad-4fcc-a94f-0509b7e43790.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"mbBZGTaie4uuISPgHXth4wr38EgpqyoC","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/b86fd9b9-16ad-4fcc-a94f-0509b7e43790.png"},"b1738bc0-a156-4fde-8509-22e06ebb7916":{"name":"bullets_PNG1454.png_1","sourceUrl":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/b1738bc0-a156-4fde-8509-22e06ebb7916.png","frameSize":{"x":100,"y":256},"frameCount":1,"looping":true,"frameDelay":4,"version":"o2V39ZCVmzcP9i2csMFsPYNW8TNwZAaI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":256},"rootRelativePath":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/b1738bc0-a156-4fde-8509-22e06ebb7916.png"},"6eeb4619-294f-44b7-ae15-926eff3a4e6f":{"name":"bullets_PNG1454.png_2","sourceUrl":null,"frameSize":{"x":100,"y":256},"frameCount":1,"looping":true,"frameDelay":12,"version":"QEO.KUQCeGgCQmFPIaoMeTa1ruq4RSar","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":256},"rootRelativePath":"assets/6eeb4619-294f-44b7-ae15-926eff3a4e6f.png"},"6b989b4a-0c9c-4fdc-bc00-d302105641f5":{"name":"32366-4-white-house-image-thumb.png_1","sourceUrl":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/6b989b4a-0c9c-4fdc-bc00-d302105641f5.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"MU90BtKhuwifbBUcOk3.uBq90ODhE6qY","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/6b989b4a-0c9c-4fdc-bc00-d302105641f5.png"},"6b9469bb-f33d-4640-8f13-5c75f996d572":{"name":"bullets_PNG1454.png_3","sourceUrl":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/6b9469bb-f33d-4640-8f13-5c75f996d572.png","frameSize":{"x":256,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"iebgRDyElAb09xuSRLPIbNnE.Drz_Ik1","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":100},"rootRelativePath":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/6b9469bb-f33d-4640-8f13-5c75f996d572.png"},"e4238bfe-5628-4ce1-9734-d001b1fb11ab":{"name":"bullets_PNG1454.png_4","sourceUrl":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/e4238bfe-5628-4ce1-9734-d001b1fb11ab.png","frameSize":{"x":256,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"TijZlY33rp49yAleh9UAZ3_Hkn86o3XS","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":100},"rootRelativePath":"assets/v3/animations/WvX7GWgLjeMN0Wg7wLCxx8swkAb9oFt6U2wlWIl6N-k/e4238bfe-5628-4ce1-9734-d001b1fb11ab.png"},"ab6e5c50-990d-4203-bac0-2e7f3dc417e5":{"name":"game over.jpg_1","sourceUrl":"assets/v3/animations/BVtpiFFb2agvz1kn-jvp7HpweRU8QcLbmPXTKNVqgAE/ab6e5c50-990d-4203-bac0-2e7f3dc417e5.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"plZFq9aaTdAFyv3WsllhU.tvevZ5E_l.","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/BVtpiFFb2agvz1kn-jvp7HpweRU8QcLbmPXTKNVqgAE/ab6e5c50-990d-4203-bac0-2e7f3dc417e5.png"},"bd0d8ef2-4f70-430f-92e5-200c46af8d83":{"name":"winner1-min (1).jpg_1","sourceUrl":"assets/v3/animations/BVtpiFFb2agvz1kn-jvp7HpweRU8QcLbmPXTKNVqgAE/bd0d8ef2-4f70-430f-92e5-200c46af8d83.png","frameSize":{"x":626,"y":626},"frameCount":1,"looping":true,"frameDelay":4,"version":"Fyp_eMkYW5c1J2jk2TmaSJ4zgT11FIOx","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":626},"rootRelativePath":"assets/v3/animations/BVtpiFFb2agvz1kn-jvp7HpweRU8QcLbmPXTKNVqgAE/bd0d8ef2-4f70-430f-92e5-200c46af8d83.png"},"f9c3607a-130f-48a3-be3b-c9c7dcb060df":{"name":"start the game","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"La6TTf8XDpibvoLbPpJwIhVZet_zFWg7","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f9c3607a-130f-48a3-be3b-c9c7dcb060df.png"},"3823081a-d1b2-4bb5-86f8-ca98c366d028":{"name":"cooltext367753722150528.png_1","sourceUrl":"assets/v3/animations/BVtpiFFb2agvz1kn-jvp7HpweRU8QcLbmPXTKNVqgAE/3823081a-d1b2-4bb5-86f8-ca98c366d028.png","frameSize":{"x":504,"y":60},"frameCount":1,"looping":true,"frameDelay":4,"version":"98f7DapoLS.PmVJetGA4R1e2wGcWj57j","loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":60},"rootRelativePath":"assets/v3/animations/BVtpiFFb2agvz1kn-jvp7HpweRU8QcLbmPXTKNVqgAE/3823081a-d1b2-4bb5-86f8-ca98c366d028.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var story = createSprite(200, 200, 400, 400);
story.setAnimation("start the game");
var trump2 = createSprite(80, 360, 10, 10);
trump2.setAnimation("donald_trump_2");
trump2.scale = 0.34;
var gameover = createSprite(200, 190, 400, 400);
gameover.setAnimation("game over.jpg_1");
gameover.scale = 1;
var bg3 = createSprite(300, 300, 400, 400);
bg3.setAnimation("cooltext367753722150528.png_1");
bg3.scale = 0.4;
var whitehouse2 = createSprite(350, 360, 10, 10);
whitehouse2.setAnimation("32366-4-white-house-image-thumb.png_1");
var trump = createSprite(35, 365, 1, 1);
trump.setAnimation("donald 1");
trump.scale = 0.10;
var wall1 = createSprite(80, 300, 400, 10);
wall1.shapeColor = "red";
var wall2 = createSprite(350, 240, 150, 10);
wall2.shapeColor = "red";
var wall3 = createSprite(210, 220, 10, 150);
wall3.shapeColor = "red";
var wall4 = createSprite(280, 100, 350, 10);
wall4.shapeColor = "red";
var wall5 = createSprite(110, 170, 10, 150);
wall5.shapeColor = "red";
var obs1 = createSprite(330, 400, 10, 10);
obs1.setAnimation("bullets_PNG1454.png_1");
obs1.scale = 0.1;
obs1.velocityY = -2;
var obs2 = createSprite(380, 250, 10, 10);
obs2.setAnimation("bullets_PNG1454.png_2");
obs2.scale = 0.1;
obs2.velocityY = 2;
var obs3 = createSprite(400, 180, 10, 10);
obs3.setAnimation("bullets_PNG1454.png_3");
obs3.scale = 0.1;
obs3.velocityX = 2;
var obs4 = createSprite(220, 210, 10, 10);
obs4.setAnimation("bullets_PNG1454.png_4");
obs4.scale = 0.1;
obs4.velocityX = 2;
var obs5 = createSprite(110, 160, 10, 10);
obs5.setAnimation("bullets_PNG1454.png_4");
obs5.scale = 0.1;
obs5.velocityX = 1;
var obs6 = createSprite(200, 240, 10, 10);
obs6.setAnimation("bullets_PNG1454.png_4");
obs6.scale = 0.1;
obs6.velocityX = 1;
var obs7 = createSprite(10, 160, 10, 10);
obs7.setAnimation("bullets_PNG1454.png_4");
obs7.scale = 0.1;
obs7.velocityX = 1;
var obs8 = createSprite(100, 220, 10, 10);
obs8.setAnimation("bullets_PNG1454.png_3");
obs8.scale = 0.1;
obs8.velocityX = 2;
var whitehouse = createSprite(360, 40, 10, 10);
var obs9 = createSprite(170, 0, 10, 10);
obs9.setAnimation("bullets_PNG1454.png_2");
obs9.scale = 0.1;
obs9.velocityY = 2;
var obs10 = createSprite(250, 89, 10, 10);
obs10.setAnimation("bullets_PNG1454.png_1");
obs10.scale = 0.1;
obs10.velocityY = 2;
whitehouse.setAnimation("32366-4-white-house-image-thumb.png_1");
whitehouse.scale = 0.5;
var gameState = "serve";
var count = 0;
var youwin = createSprite(200, 200, 400, 400);
youwin.setAnimation("winner1-min (1).jpg_1");
youwin.scale = 0.8;
function draw() {
  background("white");
  if (gameState === "serve") {
    playSound("assets/Garena-Free-Fire-Theme-Song.mp3", false);
    gameState = "serve";
    youwin.visible = false;
    gameover.visible = false;
    story.visible = true;
    trump2.visible = true;
    whitehouse2.visible = true;
    trump.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    obs1.visible = false;
    obs2.visible = false;
    obs3.visible = false;
    obs4.visible = false;
    obs5.visible = false;
    obs6.visible = false;
    obs7.visible = false;
    obs8.visible = false;
    obs9.visible = false;
    obs10.visible = false;
    whitehouse.visible = false;
  }
  if (keyDown("space") && gameState === "serve") {
    gameState = "play";
    bg3.visible = false;
    youwin.visible = false;
    story.visible = false;
    whitehouse.visible = true;
    trump.visible = true;
    trump2.visible = false;
    whitehouse2.visible = false;
    gameover.visible = false;
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    obs1.visible = true;
    obs2.visible = true;
    obs3.visible = true;
    obs4.visible = true;
    obs5.visible = true;
    obs6.visible = true;
    obs7.visible = true;
    obs8.visible = true;
    obs9.visible = true;
    obs10.visible = true;
  }
  fill("black");
  textSize(18);
  text("Attempts:"+count, 20, 30);
  if (count===5) {
    gameState = "over";
  }
  createEdgeSprites();
  trump.bounceOff(edges);
  obs1.bounceOff(wall2);
  obs1.bounceOff(edges);
  obs2.bounceOff(wall2);
  obs2.bounceOff(edges);
  obs3.bounceOff(wall3);
  obs3.bounceOff(edges);
  obs4.bounceOff(wall3);
  obs4.bounceOff(edges);
  obs5.bounceOff(wall3);
  obs5.bounceOff(wall5);
  obs6.bounceOff(wall3);
  obs6.bounceOff(wall5);
  obs7.bounceOff(wall5);
  trump.bounceOff(wall1);
  obs7.bounceOff(edges);
  obs8.bounceOff(wall5);
  obs8.bounceOff(edges);
  obs9.bounceOff(edges);
  obs9.bounceOff(wall4);
  obs10.bounceOff(wall4);
  obs10.bounceOff(edges);
  trump.bounceOff(wall2);
  trump.bounceOff(wall3);
  trump.bounceOff(wall4);
  trump.bounceOff(wall5);
  trump.velocityX = 0;
  trump.velocityY = 0;
  if (keyDown("up")) {
    trump.velocityY = -8.5;
  }
  if (keyDown("down")) {
    trump.velocityY = +8.5;
  }
  if (keyDown("right")) {
    trump.velocityX = +8.5;
  }
  if (keyDown("left")) {
    trump.velocityX = -8.5;
  }
  if (((((((((trump.isTouching(obs1) || trump.isTouching(obs2)) || trump.isTouching(obs3)) || trump.isTouching(obs4)) || trump.bounceOff(obs5)) || trump.isTouching(obs8)) || trump.isTouching(obs6)) || trump.isTouching(obs7)) || trump.isTouching(obs9)) || trump.isTouching(obs10)) {
    trump.x = 35;
    trump.y = 365;
    count = count+1;
    playSound("assets/Blood-Squirt-A10-www.fesliyanstudios.com.mp3", false);
  }
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    count = 0;
    bg3.visible = true;
  }
  if (count===5) {
    trump.visible = false;
    trump2.visible = false;
    whitehouse.visible = false;
    whitehouse2.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    obs1.visible = false;
    obs2.visible = false;
    obs3.visible = false;
    obs4.visible = false;
    obs5.visible = false;
    obs6.visible = false;
    obs7.visible = false;
    obs8.visible = false;
    obs9.visible = false;
    obs10.visible = false;
    story.visible = false;
    gameover.visible = true;
    playSound("assets/category_digital/fail.mp3", false);
  }
  if (trump.isTouching(whitehouse)) {
    playSound("assets/Short_triumphal_fanfare-John_Stracke-815794903.mp3", false);
    youwin.visible = true;
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

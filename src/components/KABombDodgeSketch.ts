import type p5 from "p5";
import type { RefObject } from "react";

export default function KABombDodgeSketch(p: p5, keys: RefObject<Set<string>>) {
  let GameMode = "menu";
  let score = 0;
  let highScore = 0;
  let timer = 0;
  let timerP = 0;
  let timers = 0;
  let timerb = 0;
  let timersh = 0;
  let timer1 = 0;

  class Button {
    x: number;
    y: number;
    w: number;
    h: number;
    textSize: number;
    text: string;
    screen: string;
    color: p5.Color;
    pressed: boolean;

    constructor(
      x: number,
      y: number,
      w: number,
      h: number,
      textSize: number,
      text: string,
      screen: string,
      color?: p5.Color,
      pressed = false
    ) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.textSize = textSize;
      this.text = text;
      this.screen = screen;
      this.color = color ?? p.color(255, 255, 255);
      this.pressed = pressed;
    }

    design() {
      p.rectMode(p.CENTER);
      p.stroke(0);
      p.fill(this.color);
      p.rect(this.x, this.y, this.w, this.h);
      p.textSize(this.textSize);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill(0);
      p.text(this.text, this.x, this.y);
    }

    press() {
      const hover =
        this.x + this.w / 2 >= p.mouseX &&
        this.x - this.w / 2 <= p.mouseX &&
        this.y + this.h / 2 >= p.mouseY &&
        this.y - this.h / 2 <= p.mouseY;

      this.pressed = hover;
      this.color = hover ? p.color(92, 92, 92) : p.color(255);
    }

    go() {
      if (this.pressed) {
        GameMode = this.screen;
        this.pressed = false;
      }
    }
  }

  class Person {
    x: number;
    y: number;
    maxSpeed = 3;
    speedX = 0;
    speedY = 0;
    maxHeight = 375;
    minHeight = 280;
    dead = false;
    Bactivated = false;
    Sactivated = false;
    SHactivated = false;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    design() {
      const X = this.x;
      const Y = this.y;

      p.stroke(180, 204, 0);
      p.fill(122, 94, 0);
      p.rectMode(p.CENTER);
      p.rect(X, Y, 10, 15);
      p.ellipse(X, Y - 13, 11, 11);
      p.rect(X + 4, Y + 11, 4, 4);
      p.rect(X - 4, Y + 11, 4, 4);
      p.rect(X + 8, Y - 3, 4, 4);
      p.rect(X - 8, Y - 3, 4, 4);

      p.fill(73, 102, 0);
      p.rect(X - 5, Y, 5, 16);
      p.rect(X + 3, Y, 5, 16);
      p.arc(X, Y - 16, 15, 14, p.radians(196), p.radians(369));

      if (this.SHactivated) {
        p.fill(0, 255, 247);
        p.arc(X + 14, Y - 7, 27, 51, p.radians(268), p.radians(449));
        p.arc(X - 12, Y - 7, 27, 51, p.radians(445), p.radians(629));
      }
    }

    move() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y > this.maxHeight) {
        this.y = this.maxHeight;
        this.speedY = 0;
      }
      if (this.y < this.minHeight) {
        this.y = this.minHeight;
        this.speedY = 4;
      }
    }

    jump() {
      if (this.speedY === 0) this.speedY = -6;
    }

    die() {
      if (this.dead) {
        GameMode = "over";
      }
    }
  }

  class Bomb {
    x: number;
    y: number;
    fallRate = 2;
    maxFall = 12;
    speed = 1;
    right = false;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    design() {
      p.noStroke();
      p.fill(0);
      p.ellipse(this.x, this.y, 20, 20);
      p.fill(255);
      p.rect(this.x - 1, this.y - 12, 3, 10);
      p.fill(255, 106, 0);
      p.rect(this.x - 1, this.y - 17, 3, 4);
    }

    fall() {
      this.y += this.fallRate;
      if (this.y >= 375) {
        this.y = 376;
        timer1++;
        if (timer1 >= 5) {
          this.y = -50;
          this.x = p.random(0, 10) * 40;
          timer1 = 0;
        }
      }
    }

    move() {
      if (this.speed <= 0.1) this.speed = 0.1;
      if (this.x >= 390) this.right = false;
      if (this.x <= 10) this.right = true;
      this.x += this.right ? this.speed : -this.speed;
    }

    kill(player: Person) {
      if (
        player.x + 15 >= this.x &&
        player.x - 15 <= this.x &&
        player.y + 20 >= this.y &&
        player.y - 25 <= this.y
      ) {
        if (player.SHactivated && this.y >= 378) {
          this.x = -50;
          player.SHactivated = false;
          timersh = 1000;
          this.y = -50;
        } else {
          player.dead = true;
        }
      }
    }
  }

  class Cloud {
    x: number;
    y: number;
    speed: number;

    constructor(x: number, y: number, speed: number) {
      this.x = x;
      this.y = y;
      this.speed = speed;
    }

    design() {
      p.fill(222, 218, 218);
      p.noStroke();
      p.ellipse(this.x, this.y, 38, 27);
      p.ellipse(this.x - 35, this.y + 2, 69, 42);
      p.ellipse(this.x - 73, this.y, 38, 27);
    }

    move() {
      this.x += this.speed;
      if (this.x > 480) this.x = -50;
    }
  }

  class PowerUp {
    x: number;
    y: number;
    ability: "speed" | "bombSlow" | "shield";
    timer = 0;

    constructor(x: number, y: number, ability: "speed" | "bombSlow" | "shield") {
      this.x = x;
      this.y = y;
      this.ability = ability;
    }

    design() {
      p.noStroke();
      switch (this.ability) {
        case "bombSlow":
          p.fill(72, 255, 0);
          p.ellipse(this.x, this.y, 25, 25);
          break;
        case "speed":
          p.fill(50, 168, 194);
          p.ellipse(this.x, this.y, 25, 25);
          break;
        case "shield":
          p.fill(55, 255, 0);
          p.ellipse(this.x, this.y, 25, 25);
          p.fill(0, 26, 255);
          p.ellipse(this.x, this.y, 20, 20);
          p.fill(255, 0, 0);
          p.ellipse(this.x, this.y, 15, 15);
          p.fill(0);
          p.ellipse(this.x, this.y, 10, 10);
          break;
      }
    }

    fall() {
      this.y += 3;
      if (this.y >= 380) {
        this.y = 381;
        this.timer++;
        if (this.timer >= 150) this.x += 500;
      }
    }

    collect(player: Person, bombs: Bomb[]) {
      if (
        this.x >= player.x - 18 &&
        this.x <= player.x + 18 &&
        this.y >= player.y - 28 &&
        this.y <= player.y + 23
      ) {
        this.x += 500;
        switch (this.ability) {
          case "bombSlow":
            player.Bactivated = true;
            timerb = 0;
            bombs.forEach(b => {
              b.fallRate = Math.max(b.fallRate - 3, 0.1);
              b.maxFall = 7;
            });
            break;
          case "speed":
            timers = 0;
            player.maxSpeed = 6;
            player.Sactivated = true;
            break;
          case "shield":
            timersh = 0;
            player.SHactivated = true;
            break;
        }
      }
    }
  }

  let playButton: Button;
  let restartButton: Button;
  let gameStarted = false;
  const player = new Person(30, 390);
  const bombs: Bomb[] = [
    new Bomb(100, 0),
    new Bomb(150, -100),
    new Bomb(200, -200)
  ];
  const bomba: Bomb = new Bomb(390, 380);
  const clouds: Cloud[] = [
    new Cloud(200, 75, 0.5),
    new Cloud(0, 140, 1.5),
    new Cloud(300, 200, 1)
  ];
  const powers: PowerUp[] = [];

  function resetGame() {
    player.dead=false;
    player.maxSpeed=3;
    player.Bactivated=false;
    player.Sactivated=false;
    player.SHactivated=false;
    score=0;
    player.x=30;
    player.y=390;
    for(let i=0;i<bombs.length;i++){
        bombs[i].fallRate=2;
        bombs[i].x=p.random(10,390);
        bombs[i].y=i*75-400;
    }
    bomba.x=390;
    bomba.speed=1;
    timer=0;
    timerP=0;
    for(let i=0;i<powers.length;i++){
        powers[i].x=500;
    }

  }

  p.setup = async () => {
    // grassImg = await p.loadImage("/images/bombdodge/grass.png");
    // treeImg = await p.loadImage("/images/bombdodge/tree.png");
    p.createCanvas(400, 400);
    playButton = new Button(200, 280, 70, 40, 30, "Play", "game");
    restartButton = new Button(200, 215, 140, 50, 30, "Play Again", "game");
  };

  let mobileDirection: "left" | "right" | null = null;
  let mobileJump = false;

  p.draw = () => {
    p.background(0, 140, 140);

    switch (GameMode) {
      case "menu":
        playButton.design();
        playButton.press();
        break;

      case "game":
        if (!gameStarted) {
          resetGame();
          gameStarted = true;
        }

        if (
          keys.current?.has("arrowleft") ||
          keys.current?.has("a") ||
          keys.current?.has("37")
        ) {
          player.speedX = -player.maxSpeed;
        } else if (
          keys.current?.has("arrowright") ||
          keys.current?.has("d") ||
          keys.current?.has("39")
        ) {
          player.speedX = player.maxSpeed;
        } else if (!mobileDirection) {
          player.speedX = 0;
        }

        if (keys.current?.has("arrowup") || keys.current?.has("w")) {
          player.jump();
        }

        // Mobile movement
        if (mobileDirection === "left") {
          player.speedX = -player.maxSpeed;
        } else if (mobileDirection === "right") {
          player.speedX = player.maxSpeed;
        }

        if (mobileJump) {
          player.jump();
          mobileJump = false;
        }
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(score, 200, 30);
        player.x = p.constrain(player.x, 10, 390);
        player.design();
        player.move();
        player.die();
        bombs.forEach(b => {
          b.design();
          b.fall();
          b.kill(player);
        });
        bomba.y = 380;
        bomba.design();
        bomba.kill(player);
        bomba.move();
        bomba.speed += 0.001;
        if (bomba.speed > 10) bomba.speed = 10;
        clouds.forEach(c => {
          c.design();
          c.move();
        });

        // Power-up logic
        timerP++;
        if (timerP >= 1000) {
          const rand = Math.random();
          const type = rand < 0.33 ? "speed" : rand < 0.66 ? "bombSlow" : "shield";
          powers.push(new PowerUp(p.random(30, 380), p.random(-1000, -100), type));
          timerP = 0;
        }

        if (player.Sactivated && ++timers >= 500) {
          player.Sactivated = false;
          player.maxSpeed = 3;
          timers = 0;
        }

        if (player.Bactivated && ++timerb >= 500) {
          player.Bactivated = false;
          timerb = 0;
          bombs.forEach(b => {
            b.maxFall = 12;
            b.fallRate += 3;
          });
        }

        if (player.SHactivated && ++timersh >= 1000) {
          player.SHactivated = false;
          timersh = 0;
        }

        powers.forEach(pw => {
          pw.design();
          pw.fall();
          pw.collect(player, bombs);
        });

        score++;
        break;

      case "over":
        timer++;
        if (timer >= 50) {
          gameStarted = false;
          p.rectMode(p.CENTER);
          p.fill(143, 68, 68);
          p.rect(200, 200, 400, 250);
          restartButton.design();
          restartButton.press();
          const message =
            score > highScore
              ? `Game over!\nNew Highscore!!: ${score - 1}`
              : `Game over!\nYour score: ${score - 1}\nHigh score: ${highScore}`;
          p.fill(0);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(message, 200, 125);
          if (score > highScore) highScore = score - 1;
        }
        break;
    }
  };
  p.touchStarted = () => {
    const x = p.mouseX;
    const y = p.mouseY;

    if (y > p.height * (2 / 3)) {
      // bottom third of screen
      mobileJump = true;
    } else {
      // upper part
      mobileDirection = x < p.width / 2 ? "left" : "right";
    }

    return false; // prevent default
  };

  p.touchEnded = () => {
    mobileDirection = null;
    mobileJump = false;
  };

  p.mousePressed = () => {
    if (playButton) playButton.go();
    if (restartButton) restartButton.go();
  };
};
import { Application } from "pixi.js";
import {gsap} from "gsap";
import {PixiPlugin} from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";


export const app = new Application({
    width: 1280,
    height: 720,
    backgroundColor: 0x5BBA6F,
    
},
    gsap.registerPlugin(PixiPlugin),
    PixiPlugin.registerPIXI(PIXI),
);
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {step} from '../dist/physics.js';
const player=()=>({x:530,y:360,vx:0,vy:0,facing:1,grounded:true});
const idle={left:false,right:false,jump:false};
test('player stays on the ground and cannot leave the map',()=>{const p=player();for(let i=0;i<1000;i++)step(p,{...idle,right:true},1/60);assert.equal(p.x,1080);assert.equal(p.y,360);assert.ok(p.grounded);});
test('jump lands on a higher platform instead of falling through it',()=>{const p=player();step(p,{...idle,jump:true},1/60);assert.ok(p.vy<0);for(let i=0;i<70;i++)step(p,idle,1/60);assert.equal(p.y,302);assert.ok(p.grounded);});
test('holding jump does not cause automatic repeated jumps',()=>{const p=player();for(let i=0;i<150;i++)step(p,{...idle,jump:true},1/60);assert.equal(p.y,302);assert.equal(p.vy,0);});
test('walk speed remains bounded across frame rates',()=>{for(const dt of [1/120,1/60,1/40]){const p=player();for(let i=0;i<100;i++)step(p,{...idle,left:true},dt);assert.ok(Math.abs(p.vx)<=235);assert.ok(p.x>=20);}});

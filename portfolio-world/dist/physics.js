export const platforms=[{x:0,y:360,w:1100},{x:62,y:297,w:140},{x:228,y:251,w:165},{x:447,y:302,w:170},{x:673,y:251,w:170},{x:899,y:297,w:145}];
export function step(p,keys,dt){
 const accel=1250,drag=Math.exp(-10*dt);let dir=Number(keys.right)-Number(keys.left);
 p.vx=dir?Math.max(-235,Math.min(235,p.vx+dir*accel*dt)):p.vx*drag;
 if(dir)p.facing=dir;
 p.coyote=p.grounded?.11:Math.max(0,(p.coyote||0)-dt);
 if(keys.jump&&p.coyote>0&&!p.jumpHeld){p.vy=-445;p.grounded=false;p.coyote=0;}
 p.jumpHeld=keys.jump;const oldY=p.y;p.vy+=1120*dt;p.x=Math.max(20,Math.min(1080,p.x+p.vx*dt));p.y+=p.vy*dt;p.grounded=false;
 for(const plat of platforms){if(p.vy>=0&&oldY<=plat.y+.5&&p.y>=plat.y&&p.x>plat.x-9&&p.x<plat.x+plat.w+9){p.y=plat.y;p.vy=0;p.grounded=true;break;}}
 if(p.y>500){p.x=530;p.y=360;p.vx=p.vy=0;}
 return p;
}

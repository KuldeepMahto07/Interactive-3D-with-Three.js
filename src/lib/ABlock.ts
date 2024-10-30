import { Box2, Color } from "three/webgpu";



export class ABlock {

    static LIGHT_COLORS: Color[] = [
        new Color( 0xffffff ), 
        new Color( 0xcccccc ), 
        new Color( 0xaaaaaa ), 
        new Color( 0x999999 ),
        new Color( 0x086ff0 ),
    ];

    static DARK_COLORS: Color[] = [
        new Color( 0x101010 ), 
        new Color( 0x181818 ), 
        new Color( 0x202020 ), 
        new Color( 0x282828 ),
        new Color( 0xbe185d ),
    ];

    static ID:number = 0;
    static LIGHT_BASE_COLOR: Color = new Color( 0x999999 );
    static DARK_BASE_COLOR: Color = new Color( 0x000000 );
    
    id:number = ABlock.ID++;
    typeBottom:number = 0;
    typeTop:number = 0;
    box:Box2 = new Box2();
    height:number = 1;
    rotation:number = 0;
    topColorIndex:number = 0;

    topColor:Color = ABlock.LIGHT_COLORS[ this.topColorIndex ];
    baseColor:Color = ABlock.LIGHT_BASE_COLOR;

    setTopColorIndex( index:number ) {
        this.topColorIndex = index;
        this.topColor = ABlock.LIGHT_COLORS[ this.topColorIndex ];
    }
}
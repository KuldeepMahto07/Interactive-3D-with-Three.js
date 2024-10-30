import { GLTF, GLTFLoader } from "three/examples/jsm/Addons.js";
import { BufferGeometry, Mesh } from "three/webgpu";

export class BlockGeometry {

    static geoms: BufferGeometry[] = [];

    static async init() {
        await this.loadGeometries();
    }

    static topToBottom: Map<number, number> = new Map([
        [0, 6],
        [1, 7],
        [2, 8],
        [3, 6],
        [4, 6],
        [5, 6],
    ]);

    
    static async loadGeometries() {
      
        const file: string = "./assets/models/blocks.glb";
        const loader: GLTFLoader = new GLTFLoader();
        const gltf: GLTF = await loader.loadAsync(file, (progress) => {
            console.log((progress.loaded / progress.total * 100) + '% blocks loaded');
        });
        //console.log(gltf);

        const bottomBlock: BufferGeometry = this.findGeometry(gltf, 'Square_Base');
        const bottomQuart: BufferGeometry = this.findGeometry(gltf, 'Quart_Base');
        const bottomHole: BufferGeometry = this.findGeometry(gltf, 'Hole_Base');

        const topSquare: BufferGeometry = this.findGeometry(gltf, 'Square_Top');
        const topQuart: BufferGeometry = this.findGeometry(gltf, 'Quart_Top');
        const topHole: BufferGeometry = this.findGeometry(gltf, 'Hole_Top');
        const topPeg: BufferGeometry = this.findGeometry(gltf, 'Peg_Top');
        const topDivot: BufferGeometry = this.findGeometry(gltf, 'Divot_Top');
        const topCross: BufferGeometry = this.findGeometry(gltf, 'Cross_Top');

        this.geoms.push(topSquare);
        this.geoms.push(topQuart);
        this.geoms.push(topHole);
        this.geoms.push(topPeg);
        this.geoms.push(topDivot);
        this.geoms.push(topCross);

        this.geoms.push(bottomBlock);
        this.geoms.push(bottomQuart);
        this.geoms.push(bottomHole);
    }

    static findGeometry(gltf: GLTF, name: string): BufferGeometry {
        return (gltf.scene.children.find((child) => child.name === name) as Mesh).geometry;
    }
}
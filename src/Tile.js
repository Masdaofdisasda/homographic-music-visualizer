import * as THREE from 'three';

export class Tile {
    constructor(id, color = 0xffffff) {
        this.id = id;
        this.color = color;
        this.geometry = new THREE.BufferGeometry();
        this.material = new THREE.MeshBasicMaterial({
            color: this.color,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        // Default corner points (square)
        this.corners = [
            { x: -0.5, y: 0.5 },  // Top-left
            { x: 0.5, y: 0.5 },   // Top-right
            { x: 0.5, y: -0.5 },  // Bottom-right
            { x: -0.5, y: -0.5 }, // Bottom-left
        ];

        this.updateGeometry();
    }

    updateGeometry() {
        const vertices = new Float32Array([
            this.corners[0].x, this.corners[0].y, 0, // Top-left
            this.corners[1].x, this.corners[1].y, 0, // Top-right
            this.corners[2].x, this.corners[2].y, 0, // Bottom-right
            this.corners[3].x, this.corners[3].y, 0, // Bottom-left
        ]);

        const indices = [
            0, 1, 2, // First triangle
            2, 3, 0, // Second triangle
        ];

        this.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        this.geometry.setIndex(indices);
        this.geometry.computeVertexNormals();
        this.geometry.attributes.position.needsUpdate = true;
    }

    setColor(color) {
        this.color = color;
        this.material.color.set(color);
    }

    setCorner(index, x, y) {
        this.corners[index] = { x, y };
        this.updateGeometry();
    }
}

import { Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import Konva from 'konva';
import { Equipment } from 'src/app/models/modele';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent],
})
export class EditorPage implements OnInit {
  back = '/';
  transformer!: Konva.Transformer;
  equipments = signal<Equipment[]>([]);

  @HostListener('window:resize')
  onResize() {
    this.stage.width(window.innerWidth);
    this.stage.height(window.innerHeight);
  }

  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLDivElement>;

  stage!: Konva.Stage;

  layer!: Konva.Layer;

  ngAfterViewInit(): void {
    this.stage = new Konva.Stage({
      container: this.container.nativeElement,
      width: window.innerWidth,
      height: window.innerHeight,
      draggable: true,
    });

    this.stage.on('wheel', (e) => {
      e.evt.preventDefault();

      const scaleBy = 1.05;

      const oldScale = this.stage.scaleX();

      const pointer = this.stage.getPointerPosition();

      if (!pointer) return;

      const mousePointTo = {
        x: (pointer.x - this.stage.x()) / oldScale,

        y: (pointer.y - this.stage.y()) / oldScale,
      };

      const direction = e.evt.deltaY > 0 ? -1 : 1;

      const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

      this.stage.scale({
        x: newScale,
        y: newScale,
      });

      const newPos = {
        x: pointer.x - mousePointTo.x * newScale,

        y: pointer.y - mousePointTo.y * newScale,
      };

      this.stage.position(newPos);

      this.stage.batchDraw();
    });

    this.stage.on('mousemove', () => {
      const pos = this.stage.getPointerPosition();

      if (!pos) return;

      this.mouseX = Math.round(pos.x);

      this.mouseY = Math.round(pos.y);
    });

    this.layer = new Konva.Layer();

    this.stage.add(this.layer);

    this.transformer = new Konva.Transformer({
      rotateEnabled: true,

      enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    });

    this.layer.add(this.transformer);

    this.drawGrid();
  }

  constructor() {}

  ngOnInit() {}

  // Add camera
  addCamera() {
    const equipment: Equipment = {
      id: crypto.randomUUID(),
      type: 'camera',
      x: 100,
      y: 100,
      width: 80,
      height: 80,
      rotation: 0,
      image: 'assets/img/023-camera-de-securite-2.png',
    };

    this.equipments.update((items) => [...items, equipment]);
    this.drawEquipment(equipment);
  }

  // Draw
  drawEquipment(equipment: Equipment) {
    const rect = new Konva.Rect({
      id: equipment.id,
      x: equipment.x,
      y: equipment.y,
      width: equipment.width,
      height: equipment.height,
      fill: '#2563eb',
      cornerRadius: 10,
      draggable: true,
    });

    rect.on('dragend', () => {
      this.updateEquipmentPosition(equipment.id, rect.x(), rect.y());
    });

    rect.on('click', () => {
      this.selectEquipment(rect);
    });

    rect.on('dragstart', () => {
      this.stage.draggable(false);
    });

    rect.on('dragend', () => {
      this.stage.draggable(true);
    });

    rect.on('dragmove', () => {
      const gridSize = 20;

      rect.x(Math.round(rect.x() / gridSize) * gridSize);

      rect.y(Math.round(rect.y() / gridSize) * gridSize);
    });

    this.layer.add(rect);

    this.layer.draw();
  }

  // Mettre à jour un equipement
  updateEquipmentPosition(id: string, x: number, y: number) {
    this.equipments.update((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              x,
              y,
            }
          : item,
      ),
    );
  }

  // Selectionner un équipement
  selectEquipment(node: Konva.Node) {
    this.transformer.nodes([node]);
    this.layer.draw();
  }

  // images

  add_image() {
    const imageObj = new Image();
    imageObj.src = 'assets/img/023-camera-de-securite-2.png';

    const equipment: Equipment = {
      id: crypto.randomUUID(),
      type: 'camera',
      x: 100,
      y: 100,
      width: 80,
      height: 80,
      rotation: 0,
      image: 'assets/img/023-camera-de-securite-2.png',
    };

    const image = new Konva.Image({
      image: imageObj,
      type: equipment.type,
      x: equipment.x,
      y: equipment.y,
      width: equipment.width,
      height: equipment.height,
      draggable: true,
    });

    image.on('dragend', () => {
      this.updateEquipmentPosition(equipment.id, image.x(), image.y());
    });

    image.on('click', () => {
      this.selectEquipment(image);
    });

    image.on('dragstart', () => {
      this.stage.draggable(false);
    });

    image.on('dragend', () => {
      this.stage.draggable(true);
    });

    this.layer.add(image);

    this.layer.draw();
  }

  // Upload plan
  uploadPlan(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      const imageObj = new Image();

      imageObj.src = reader.result as string;

      imageObj.onload = () => {
        const background = new Konva.Image({
          image: imageObj,

          x: 0,
          y: 0,

          width: imageObj.width,
          height: imageObj.height,
          // width: imageObj.width,
          // height: imageObj.height,
        });

        this.layer.add(background);

        background.moveToBottom();

        this.layer.draw();
      };
    };

    reader.readAsDataURL(file);
  }

  // Zoom
  zoomIn() {
    const scale = this.stage.scaleX();

    this.stage.scale({
      x: scale * 1.1,
      y: scale * 1.1,
    });

    this.stage.batchDraw();
  }

  zoomOut() {
    const scale = this.stage.scaleX();

    this.stage.scale({
      x: scale / 1.1,
      y: scale / 1.1,
    });

    this.stage.batchDraw();
  }

  resetView() {
    this.stage.scale({
      x: 1,
      y: 1,
    });

    this.stage.position({
      x: 0,
      y: 0,
    });

    this.stage.batchDraw();
  }

  // grid
  drawGrid() {
    const gridSize = 50;

    for (let i = 0; i < 5000; i += gridSize) {
      this.layer.add(
        new Konva.Line({
          points: [i, 0, i, 5000],

          stroke: '#ddd',

          strokeWidth: 1,
        }),
      );

      this.layer.add(
        new Konva.Line({
          points: [0, i, 5000, i],

          stroke: '#ddd',

          strokeWidth: 1,
        }),
      );
    }
  }

  // Mouse position
  mouseX = 0;
  mouseY = 0;


}

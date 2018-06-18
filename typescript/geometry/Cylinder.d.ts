import { Geometry } from '../Geometry'

interface ICylinderGeometryOption {
    radius?: number;
    height?: number;

    capSegments?: number;
    heightSegements?: number;
}

export class Cylinder extends Geometry {

    constructor(option?: ICylinderGeometryOption);

    radius?: number;
    height?: number;

    capSegments?: number;
    heightSegements?: number;
}
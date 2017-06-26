interface ISomething {
    doSomething(a: number, b: number): string;
}

class A implements ISomething {
    public z: number[];
    protected y: string;
    private _x: number;

    public get x(): number {
        return this._x;
    }

    public doSomething(a: number, b: number): string {
        return `${a} + ${b} = ${a + b}`;
    }
}

class B extends A {
    private _b: number;

    public doSomething(a: number, b: number): string {
        return `${a} * ${b} = ${a * b}`;
    }
}

class C extends A {
    private _c: string;
}

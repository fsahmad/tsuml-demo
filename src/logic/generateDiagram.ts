import * as ts from 'typescript';
import * as tsuml from 'typescript-uml';

export default function generateDiagram(code: string): string {
    const model = tsuml.TypeScriptUml.parseFile('tsuml-demo.ts', ts.ScriptTarget.ES5, code);

    const diagramSource = tsuml.TypeScriptUml.generateClassDiagram(
        model,
        {
            formatter: 'plantuml',
            plantuml: {
                diagramTags: false,
            },
        },
    );

    return diagramSource;
}

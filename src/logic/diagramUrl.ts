const plantumlEncoder = require('plantuml-encoder');

export default function diagramUrl(diagram: string): string {
    var encoded = plantumlEncoder.encode(diagram);
    return `http://www.plantuml.com/plantuml/svg/${encoded}`;
}

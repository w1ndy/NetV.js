import { NetV } from 'src'
import Node from 'src/node'

export class LabelManager {
    private $_core: NetV
    private $_svg: SVGElement
    public constructor(core: NetV) {
        this.$_core = core
        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement
        core.$_container.prepend(this.$_svg)
        this.$_svg.setAttribute('width', core.$_configs.width)
        this.$_svg.setAttribute('height', core.$_configs.height)
        core.$_container.style.position = 'relative'
        this.$_svg.style.position = 'absolute'
        this.$_svg.style.pointerEvents = 'none'
    }
    public drawLabel(node: Node) {
        const pos = node.position()
        const offset = node.textOffset()
        const text = node.text()

        const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        textElement.setAttribute('x', String(pos.x + offset.x))
        textElement.setAttribute('y', String(pos.y + offset.y))
        textElement.setAttribute('text-anchor', 'start')
        textElement.setAttribute('alignment-baseline', 'middle')
        textElement.innerHTML = text
        this.$_svg.appendChild(textElement)
    }

    public removeLabel(node: Node) {}
}

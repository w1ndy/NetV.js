/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from './interfaces'
import { isValidId } from './utils/is'
import { NetV } from './index'

class Node {
    public $_clickCallback: (node: Node) => void

    private $_core: NetV
    private $_id: string
    private $_position = {
        x: 0,
        y: 0
    }
    private $_strokeWidth: number
    private $_strokeColor: interfaces.Color
    private $_fill: interfaces.Color
    private $_r: number // radius
    private $_showLabel: boolean
    private $_text: string
    private $_textOffset: { x: number; y: number }

    public constructor(core, nodeData: interfaces.NodeData) {
        this.$_core = core
        const defaultConfigs = this.$_core.$_configs
        const data = {
            ...{
                x: this.$_position.x,
                y: this.$_position.y,
                strokeWidth: defaultConfigs.node.strokeWidth,
                strokeColor: defaultConfigs.node.strokeColor,
                r: defaultConfigs.node.r,
                fill: defaultConfigs.node.fill,
                showLabel: defaultConfigs.node.showLabel,
                textOffset: defaultConfigs.node.offset,
                clickCallback: defaultConfigs.node.clickCallback
            },
            ...nodeData
        }

        this.$_setId(data.id)
        this.$_position = {
            x: data.x,
            y: data.y
        }
        this.$_strokeWidth = data.strokeWidth
        this.$_strokeColor = data.strokeColor
        this.$_fill = data.fill
        this.$_r = data.r
        this.$_showLabel = data.showLabel
        this.$_textOffset = data.textOffset

        this.setClickCallback(data.clickCallback)
    }

    /**
     * getter of private property $_id
     * @memberof Node
     */
    public id() {
        return this.$_id
    }

    /**
     * set/get x postion
     * @param {number} [value]
     * @memberof Node
     */
    public x(value?: number) {
        if (arguments.length !== 0) {
            this.$_position.x = value
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position')
            // NOTE: update related link position
            if (this.$_core.$_id2links.get(this.$_id)) {
                for (const link of this.$_core.$_id2links.get(this.$_id)) {
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'source')
                }
            }
        }
        return this.$_position.x
    }

    /**
     * set/get y postion
     * @param {number} [value]
     * @memberof Node
     */
    public y(value?: number) {
        if (arguments.length !== 0) {
            this.$_position.y = value
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position')
            // NOTE: update related link position
            if (this.$_core.$_id2links.get(this.$_id)) {
                for (const link of this.$_core.$_id2links.get(this.$_id)) {
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'source')
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'target')
                }
            }
        }
        return this.$_position.y
    }

    /**
     * set/get postion
     * @param {number} [value]
     * @memberof Node
     */
    public position(x?: number, y?: number) {
        if (arguments.length === 2) {
            this.$_position.x = x
            this.$_position.y = y
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position')
            // NOTE: update related link position
            if (this.$_core.$_id2links.get(this.$_id)) {
                for (const link of this.$_core.$_id2links.get(this.$_id)) {
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'source')
                }
            }
        } else if (arguments.length !== 0 && arguments.length !== 2) {
            throw Error(`Node.position() method can not deal with ${arguments.length} parameters.`)
        }
        return this.$_position
    }

    /**
     * set/get stroke width of a node
     * @param {number} [value]
     * @memberof Node
     */
    public strokeWidth(value?: number) {
        if (arguments.length === 1) {
            this.$_strokeWidth = value
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeWidth')
        }
        return this.$_strokeWidth
    }

    /**
     * set/get stroke color of a node
     * @param {Color} [value]
     */
    public strokeColor(value?: interfaces.Color) {
        if (arguments.length === 1) {
            this.$_strokeColor = value
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeColor')
        }
        return this.$_strokeColor
    }

    /**
     * set/get fill color of a node
     * @param {Color} [value]
     */
    public fill(value?: interfaces.Color) {
        if (arguments.length === 1) {
            this.$_fill = value
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'fill')
        }
        return this.$_fill
    }

    /**
     * set/get radius of a node
     * @param {number} [r]
     */
    public r(value?: number) {
        if (arguments.length === 1) {
            this.$_r = value
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'radius')
        }
        return this.$_r
    }

    /**
     * control label show or not
     * @param value
     */
    public showLabel(value: boolean) {
        this.$_showLabel = value
        if (value) {
            this.$_core.labelManager.drawLabel(this)
        } else {
            this.$_core.labelManager.removeLabel(this)
        }
    }

    /**
     * get/set node's label
     * @param value label text
     */
    public text(value?: string) {
        if (value) {
            this.$_text = value
        }
        return this.text
    }

    /**
     * get/set offset value
     * @param value offset value
     */
    public textOffset(value?: { x: number; y: number }) {
        if (value) {
            this.$_textOffset = value
        }
        return this.text
    }

    /**
     * set the id of this node.
     * it is only used for constructor
     * because a node's id is not allowed to be changed.
     * @private
     * @param {string} value
     * @returns nothing
     * @memberof Node
     */
    private $_setId(value: string) {
        if (isValidId(value)) {
            if (this.$_core.$_id2node.has(value)) {
                throw new Error(`Duplicate node (${value}) is not allowed.`)
            }
            if (isValidId(this.$_id)) {
                throw new Error('Can not change the id of an exist node.')
            }
            this.$_core.$_id2node.set(value, this)
            this.$_id = value
        } else {
            throw new Error(`Invalid ID ${value}`)
        }
    }

    /**
     * set click callback function
     * @param callback click callback function
     */
    private setClickCallback(callback: (node: Node) => void) {
        this.$_clickCallback = callback
    }
}

export default Node

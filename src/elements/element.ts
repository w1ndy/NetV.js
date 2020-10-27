import * as interfaces from '../interfaces'
import { NetV } from '../index'
import { override } from '../utils/utils'

export class Element {
    public $_style: interfaces.NodeStyle = {}
    public $_clickCallback: (element: Element) => void
    public $_hoverCallback: (element: Element) => void

    protected $_core: NetV
    protected $_changeRenderAttribute: (element: Element, key: string) => void

    public constructor(
        core: NetV,
        type: 'node' | 'link',
        data: interfaces.NodeData | interfaces.LinkData
    ) {
        this.$_core = core
        const defaultConfigs = this.$_core.$_configs

        // override default style with user specified style in data
        this.$_style = this.overrideDefaultStyle(defaultConfigs[type].style, data.style)

        const renderManager = this.$_core.$_renderer[`${type}Manager`]
        this.$_changeRenderAttribute = renderManager.changeAttribute.bind(renderManager)

        this.onClick(data?.clickCallback || defaultConfigs[type].clickCallback)
        this.onHover(data?.hoverCallback || defaultConfigs[type].hoverCallback)

        // generate style methods, e.g.: node.r(), link.strokeWidth()
        Object.keys(defaultConfigs[type].style[this.$_style.shape]).forEach((key) => {
            // generate style functions
            this[key] = this.generateElementStyleGetterSetter(key)
        })
    }

    /**
     *
     * @param defaultStyle: the default style configs imported from Netv default configs and user default configs
     * @param individualStyle: the individual element style
     */
    public overrideDefaultStyle(
        defaultStyle,
        individualStyle: interfaces.NodeStyle | interfaces.LinkStyle
    ) {
        let style: any
        let shape = individualStyle?.shape || defaultStyle.shape
        // add default link style
        if (!individualStyle) {
            style = defaultStyle[defaultStyle.shape]
        } else {
            style = override(defaultStyle[shape], individualStyle)
        }
        style.shape = shape
        return style
    }

    public generateElementStyleGetterSetter(key: string) {
        return (value?: any) => {
            if (value !== undefined) {
                if (value === Object(value)) {
                    // value is an object
                    this.$_style[key] = { ...value, ...this.$_style[key] }
                } else {
                    this.$_style[key] = value
                }
                this.$_changeRenderAttribute(this, key)
            }
            return this.$_style[key]
        }
    }

    /**
     * set hover callback function
     * @param callback hover callback function
     */
    public onHover(callback: (element: Element) => void) {
        this.$_hoverCallback = callback
    }

    /**
     * set click callback function
     * @param callback click callback function
     */
    public onClick(callback: (element: Element) => void) {
        this.$_clickCallback = callback
    }
}

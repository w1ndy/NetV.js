/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */
import { NetV } from '../build/NetV'
import { TestCase } from './TestCase'

const numbersOfNodes = [5e2, 1e3, 2e3, 4e3, 8e3]
const density = 20

const testCase = new TestCase({
    numbersOfNodes,
    numbersOfLinks: numbersOfNodes.map((n) => n * density),
    name: 'NetV'
})

async function test(testCase) {
    const netv = new NetV({
        container: testCase.container,
        width: testCase.width,
        height: testCase.height,
        nodeLimit: testCase.data.nodes.length,
        linkLimit: testCase.data.links.length
    })

    netv.data(testCase.data)

    await testCase.run(() => {
        netv.nodes().forEach((n) => {
            n.position({
                x: Math.random() * testCase.width,
                y: Math.random() * testCase.height
            })
        })
        netv.draw()
    }, 10000)

    testCase.finish()
}

test(testCase)

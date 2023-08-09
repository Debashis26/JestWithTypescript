
import { add } from "./index"

describe("test add function",()=>{
    it("should exist",()=>{
        expect(add).toBeTruthy()
    })
    it("shoul return 0 if passed value is empty string",()=>{
        expect(add("")).toBe(0)
    })
    it("shoul return sum of two number",()=>{
        expect(add("1")).toBe(1)
    })
    it("shoul return sum of two number",()=>{
        expect(add("2")).toBe(2)
    })
    it("shoul return sum of two number",()=>{
        expect(add("1,2")).toBe(3)
    })
    it("shoul return sum of two number",()=>{
        expect(add("3,2")).toBe(5)
    })
    it("shoul return sum of n number",()=>{
        expect(add("3,2,1")).toBe(6)
    })
    it("shoul return sum of n number",()=>{
        expect(add("1\n2,3")).toBe(6)
    })
    it("shoul return sum of n number",()=>{
        expect(add("//;\n1;2")).toBe(3)
    })

    
})
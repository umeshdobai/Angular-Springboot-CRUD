
import { admin } from "src/admin/admin.component";

describe('Hello Admin', () => {

    let expected = "";

    beforeEach(() => {
        expected = "Hello Admin!";
    });

    afterEach(() => {
        expected = "";
    });

    it('Hello Admin', 
    () => {expect(admin()).toBe(expected);
    });
});
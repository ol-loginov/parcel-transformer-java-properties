import {Transformer} from '@parcel/plugin';
import {parse} from 'properties-parser';

export default new Transformer({
    async transform({asset}) {
        let code = await asset.getCode();
        let values = parse(code);

        asset.type = 'json';
        asset.setCode(JSON.stringify(values));

        return [asset];
    }
});

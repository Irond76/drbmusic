import { writable } from "svelte/store";

const imageStore = writable([{
    id: 1,
    url: "https://res.cloudinary.com/rush-media/image/upload/v1676512116/Dale-Bendixen-Music/Instagram_pics/313215962_106431075607370_7731319882144472907_n_17899851689691172_uu6rer.jpg"
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512116/Dale-Bendixen-Music/Instagram_pics/325672791_1916655565393211_4919502252938147478_n_18338789602008531_ndjmqi.jpg"
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512116/Dale-Bendixen-Music/Instagram_pics/329836760_718573633043805_8538043231297772730_n_17975231108026108_n9ihoa.jpg"
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512116/Dale-Bendixen-Music/Instagram_pics/310488653_1227305557817226_2232252797656326873_n_17978582053736805_lignbz.jpg"
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/310671153_1325183168227812_4243844971021872855_n_17952452999030903_cazb0d.jpg"
    },
    {
        id: 6,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/279044849_696378198370951_2454722976408112281_n_17855897618742000_fhgoub.jpg"
    },
    {
        id: 7,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/285261619_3242218946034281_2265939349938186028_n_17931690821272175_zvl6be.jpg"
    },
    {
        id: 8,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/284903778_1754382908232795_7963319979505753193_n_17903921219599526_x2zkeh.jpg"
    },
    {
        id: 9,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/278772348_1780632268949552_6044422301138933975_n_17923339979167330_bicczu.jpg"
    },
    {
        id: 10,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/279183554_1389191898209908_241402696474246720_n_18025956970367296_tncacx.jpg"
    },
    {
        id: 11,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/278725276_676083140317047_3457161047655774597_n_17960403319643302_ox4qz4.jpg"
    },
    {
        id: 12,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/273967754_350832943389385_3614398550082740846_n_18151360834239774_qxphpu.jpg"
    },
    {
        id: 13,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/273906584_1698321307184424_5015310621934727981_n_17972305633502420_la9klt.jpg"
    },
    {
        id: 14,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512115/Dale-Bendixen-Music/Instagram_pics/271879227_665835454439020_8113857693771019628_n_17956482832581286_sltcan.jpg"
    },
    {
        id: 15,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/260216961_1543468519341521_7411064507192482740_n_18263994601054999_h9mmmn.jpg"
    },
    {
        id: 16,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/257761811_128109989615333_2743593652010963031_n_18252747334067283_ca5kl9.jpg"
    },
    {
        id: 17,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/259042074_3027082027608800_3187915000522092173_n_17866162742596914_dnxo6a.jpg"
    },
    {
        id: 18,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/208395024_235075401501097_654223681252673464_n_17942604907517160_res2xo.jpg"
    },
    {
        id: 19,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/205220672_225090505937785_138015687881885636_n_17924837632629064_vor9ru.jpg"
    },
    {
        id: 20,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/196743921_2579805972325960_1620920192726862015_n_17984161888371481_aozqvg.jpg"
    },
    {
        id: 21,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/198820422_1156523224847924_2451959060837106860_n_17923030555628843_jgxble.jpg"
    },
    {
        id: 22,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/166785099_267694411751906_3272851104300814097_n_17886064904111616_lpdprq.jpg"
    },
    {
        id: 23,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/161535127_969973053812147_5595682968698942360_n_17872638317260030_spwpge.jpg"
    },
    {
        id: 24,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512114/Dale-Bendixen-Music/Instagram_pics/140758701_128436295715801_7742352495130813161_n_17878815143103498_brsbiv.jpg"
    },
    {
        id: 25,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512113/Dale-Bendixen-Music/Instagram_pics/136102420_751842475690300_1055512069655423277_n_17921483689498563_mffvbu.jpg"
    },
    {
        id: 26,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512113/Dale-Bendixen-Music/Instagram_pics/133672654_839173973538416_3158297375637297129_n_17900177401681045_jpxx6i.jpg"
    },
    {
        id: 27,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512113/Dale-Bendixen-Music/Instagram_pics/131595636_153814082773908_420692332014915710_n_18078225301243667_gbwarz.jpg"
    },
    {
        id: 28,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512113/Dale-Bendixen-Music/Instagram_pics/132479038_2856155458044791_6284221139306148386_n_17857777214365375_xgq8ic.jpg"
    },
    {
        id: 29,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512113/Dale-Bendixen-Music/Instagram_pics/130331295_793354928189359_4598295478705078843_n_17976357535334987_fwpkzo.jpg"
    },
    {
        id: 30,
        url: "https://res.cloudinary.com/rush-media/image/upload/v1676512112/Dale-Bendixen-Music/Instagram_pics/121506162_978495642649129_5603106718049852167_n_17870061875044524_kgbihd.jpg"
    }

])

export default imageStore;
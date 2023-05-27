function heavyMetalUmlauts(t) {
    let res = ''
    const voc = {
        A:'Ä', O:'Ö', a:'ä', o:'ö', E:'Ë', U:'Ü', e:'ë', u:'ü', I:'Ï', Y:'Ÿ', i:'ï', y:'ÿ'
        }

    for (let i = 0; i < t.length; i++) {
        if (voc[t[i]]) res += voc[t[i]];
        else res += t[i]
    }
    return res;
}
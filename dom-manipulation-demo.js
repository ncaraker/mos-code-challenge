(() => {
    const paramsArray = [
        `sha_affiliate=${
            document.domain == 'airportparkingguides.com'
                ? 'apg'
                : document.domain == 'stadiumparkingguides.com'
                ? 'spg'
                : 'spothero'
        }`,
        'utm_source=seo',
        `utm_medium=${document.domain}`,
        'utm_campaign=placement_desc',
    ];
    const links = document.getElementsByTagName('a');
    for (i = 0; i < links.length; i++) {
        if (
            links[i].href.includes('spothero.com') &&
            !links[i].href.includes('blog.') &&
            !links[i].href.includes('hasoffers')
        ) {
            const linkBase = links[i].href.split('?')[0];
            const prevParams = links[i].href.split('?')[1];
            const prevParamsArray =
                prevParams && prevParams.includes('&')
                    ? prevParams.split('&')
                    : prevParams
                    ? [prevParams]
                    : [];
            const combinedParamsArray = paramsArray
                .concat(
                    prevParamsArray.filter(
                        item => paramsArray.indexOf(item) < 0
                    )
                )
                .join('&');
            links[i].href = linkBase.concat('?', combinedParamsArray);
        }
    }
})();

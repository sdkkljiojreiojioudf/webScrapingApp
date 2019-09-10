export const convertGraphQLSetToLabelData = function (setData, labelFieldName, valueFieldName) {
    let labelsTab = [];
    let data = [];
    let elem;
    for (let i = 0; i < setData.length; i++) {
        elem = setData[i];
        labelsTab.push(elem[labelFieldName]);
        data.push(elem[valueFieldName]);
    }
    let newLabelsTab = [];
    let newData = [];
    for (let i = 0; i < labelsTab.length; i++) {
        const element = labelsTab[i];
        let sameDateCpt = 0;
        let searchDuplicate = true;
        if (i < labelsTab.length - 1) {
            let j = i;
            while (searchDuplicate === true) {
                if (labelsTab[j] === element && j < labelsTab.length) {
                    console.log(element);
                    sameDateCpt += 1;
                } else {
                    searchDuplicate = false;
                }
                j++;
            }
            let totalVal = 0;
            for (let k = i; k < i + sameDateCpt; k++) {
                const element = data[k];
                totalVal += parseInt(element, 10);
            }
            newLabelsTab.push(element);
            newData.push(totalVal / sameDateCpt);
            i += sameDateCpt - 1;
        } else {
            newLabelsTab.push(element);
            newData.push(data[i]);
        }
    }
    console.log(newLabelsTab);
    console.log(newData);

    return { labels: newLabelsTab, data: newData };
}


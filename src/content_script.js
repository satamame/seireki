//----------------------
$(function () {

    var era = "昭和";
    // var x = document.evaluate('descendant::text()[matches(., "' + era + '\\s*(元|[0-9]+)\\s*年")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var x = document.evaluate('descendant::text()[contains(., "' + era + '")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

	for (var i = 0, l = x.snapshotLength; i < l; i++) {
        // r.push(x.snapshotItem(i));
        // console.log(x.snapshotItem(i).textContent + "\n");
        x.snapshotItem(i).textContent = "あああああ";
	}
});

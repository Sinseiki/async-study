//tsc 006 -lib esnext,dom
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var canvases = [];
for (var _i = 0, _a = document.querySelectorAll('canvas'); _i < _a.length; _i++) {
    var item = _a[_i];
    canvases.push(item.getContext('2d'));
}
;
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var data, _data, dataArrays, j, anArray, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios('005.json')];
                case 1:
                    data = (_a.sent()).data;
                    _data = data;
                    dataArrays = [];
                    for (j = 0; j < _data.length; j++) {
                        anArray = Object.values(_data[j]);
                        dataArrays.push(anArray);
                    }
                    for (i = 0; i < 3; i++) {
                        new Chart(canvases[i], {
                            type: 'bar',
                            data: {
                                labels: [
                                    dataArrays[0][2],
                                    dataArrays[1][2],
                                    dataArrays[2][2],
                                    dataArrays[3][2],
                                    dataArrays[4][2]
                                ],
                                datasets: [{
                                        label: Object.keys(_data[0])[i + 3],
                                        backgroundColor: 'rgba(255, 127, 127,.5)',
                                        borderColor: 'rgb(255, 127, 127)',
                                        borderWidth: 1,
                                        data: [
                                            dataArrays[0][i + 3],
                                            dataArrays[1][i + 3],
                                            dataArrays[2][i + 3],
                                            dataArrays[3][i + 3],
                                            dataArrays[4][i + 3],
                                        ]
                                    }]
                            },
                            options: {
                                responsive: true,
                                legend: {
                                    position: 'top'
                                },
                                title: {
                                    display: true,
                                    text: Object.keys(_data[0])[i + 3].toUpperCase() + ' Chart'
                                }
                            }
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
})();

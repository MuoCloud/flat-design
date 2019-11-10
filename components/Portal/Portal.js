"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PortalConsumer_1 = __importDefault(require("./PortalConsumer"));
const PortalHost_1 = __importStar(require("./PortalHost"));
class Portal extends react_1.default.PureComponent {
    render() {
        const { children } = this.props;
        return (<PortalHost_1.PortalContext.Consumer>
        {manager => (<PortalConsumer_1.default manager={manager}>
            {children}
          </PortalConsumer_1.default>)}
      </PortalHost_1.PortalContext.Consumer>);
    }
}
Portal.Host = PortalHost_1.default;
exports.default = Portal;

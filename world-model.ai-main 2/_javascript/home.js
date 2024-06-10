import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime, loadImg, retryVideo, initClipboard } from './modules/plugins';

basic();
initSidebar();
initTopbar();
initLocaleDatetime();
loadImg();
retryVideo();
initClipboard();

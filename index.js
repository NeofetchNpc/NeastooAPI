import { chatGPT } from './plugins/Ai-ChatGPT.js';
import { blackBoxChat } from './plugins/Ai-Blackbox.js';
import { TiktokDL } from './plugins/DL-tiktok.js';
import { ytbmp3downloader, ytbmp4downloader } from './plugins/DL-youtube.js';
import { InstagramDL } from './plugins/DL-instagram.js';
import { SpotifyDL } from './plugins/DL-spotify.js';
import { twitterDownloader } from './plugins/DL-x.js';
import { googleDriveDownloader } from './plugins/DL-gdrive.js';
import { megaDl } from './plugins/DL-mega.js';
import { nhentaiSearch } from './plugins/AN-nhentai.js';
import { sfwAnime } from './plugins/AN-sfwnime.js';
import { charAnimeInfo } from './plugins/AN-charinfo.js';

// Ekspor semua fitur di sini
export { chatGPT, blackBoxChat, TiktokDL, ytbmp3downloader, ytbmp4downloader, InstagramDL, SpotifyDL, twitterDownloader, googleDriveDownloader, megaDl, nhentaiSearch, sfwAnime, charAnimeInfo };

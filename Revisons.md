commit 5c54b6ca68eba8624d8c0ee9f15902aca8250c0c
Author: jason.zou@gmail.com <jason.zou@gmail.com>
Date:   Thu Jun 15 13:33:46 2023 -0400
    fix tauri build issue
commit 20f4cab583f42abff44ee3a510dc983b4c786a06
Author: jason.zou@gmail.com <jason.zou@gmail.com>
Date:   Thu Jun 15 11:01:43 2023 -0400
    tauri api - open dialog
commit 93267d98cc0532320007990ae1773a8ffb9f6827
Author: Qing Zou <jason.zou@gmail.com>
Date:   Wed Jun 14 16:23:39 2023 -0400
    working but blank screen - tauri build
commit d5270b228274dce8b0ac33ab4fdfa3004903f571
Author: Qing Zou <jason.zou@gmail.com>
Date:   Wed Jun 14 15:24:17 2023 -0400
    first tauri version
commit a2d8a23b8e2f9e522bba6b3cd833a1582a14dde7
Author: Qing Zou <jason.zou@gmail.com>
Date:   Wed Jun 14 15:03:47 2023 -0400
    remove pluginManager
commit 8319cddbadc7d87087b16bc897547b21608db2bb
Author: Qing Zou <jason.zou@gmail.com>
Date:   Tue Jun 13 22:12:29 2023 -0400
    update vue etc.
commit 42805395bb9f3a6a7359a537e84fdf90268658ff
Author: huntfeng <spacecurvature@gmail.com>
Date:   Sat May 27 02:01:55 2023 -0600
    increase visibility of software
commit 82e2be579bd6cf738bef44879303c051cbfa70bb
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sat May 27 01:20:15 2023 -0600
    V3.0.0 beta prerelease (#54)
    
    * fixes #49
    
    * fixes #50
    
    * able to show file in explorer
    
    * fixes #48 bug3&4
    
    * fixes #48 better error promt when meta failed to retrieve
    
    * resolves #39, able to batch open,move,delete
    
    * fixed typo stickyheader of tableview
    
    * improve tableview UI/UX
    
    * resolves #39, added categories in metainfotab
    
    * fix plugin setting loading order
commit 0126a3414775ddc9292bffd08a0acb4f7eda2d01
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Tue May 23 22:02:22 2023 -0600
    Plugin system (#53)
    
    * implemented plugin manager UI
    
    * implement plugins following life cycles, and improved layout controll
    
    * correctly save/load appState, modified changePath logic
    
    * implemented save/loadData
    
    * able to add/get/load/save plugin settings
    
    * change openpage logic; able to render plugin settings
    
    * use uid of plugin buttons and views
    
    * correctly mount plugin page with uid
    
    * all pages can receive data property
    
    * modified test for FloatingMenu
commit 1a9122b97ccf00f19d5c33786892439ed8b3add3
Author: Jack251970 <53996452+Jack251970@users.noreply.github.com>
Date:   Mon May 15 00:41:13 2023 +0800
    Fix button theme mismatching interface issue. (#47)
commit ec3e74aa3973f2a676dd8c18e651c660af5b051b
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Thu May 11 02:19:05 2023 -0600
    Small fixes (#38)
    
    * better performance for large table search
    
    * render standard annots properly
    
    * bump `pdf.js` version for better text selection
    
    * remove appdata on uninstall (nsis)
    
    * fixed recursive update problem in tableview
    
    * Update quasar.config.js
    
    * update workflow
commit 2fada38b0e57231b2a955db4b5800695ee291a23
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Thu May 11 00:50:15 2023 -0600
    Small fixes (#37)
    
    *  better performance for large table search
    
    * bump `pdf.js` version for better text selection
    
    * render standard annots properly
    
    * remove appdata on uninstall (nsis)
    
    * update workflow
commit e2c63f1920c066c86a27f896172678d18fd676f1
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Thu May 11 00:43:42 2023 -0600
    Small fixes (#36)
    
    * better performance for large table search
    
    * bump `pdf.js` version for better text-selection
    
    * render standard annots properly
    
    * remove appdata on uninstall (nsis)
    
    * update workflow
commit dba563642ba32a8e049126469fc907afdd352d4f
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Wed May 10 23:38:54 2023 -0600
    Small fixes (#35)
    
    * better performance for large table search
    
    * render standard annots (annots made by adobe etc...) properly
    
    * bump `pdf.js` version for better text selection
    
    * remove appdata on uninstall (nsis)
commit 315115de6cce534fa980f3ae281e1de1f6a54350
Author: huntfeng <spacecurvature@gmail.com>
Date:   Mon May 8 13:46:14 2023 -0600
    no need to test before build
commit 23f93cbcbf350b6d8801d0d84f8b67428a3cc763
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Mon May 8 13:32:55 2023 -0600
    V2.0.0 beta prerelease (#33)
    
    * fixed no space in rename input in q-tree
    
    * added zoom in/out functionality
    
    * rename window tabs after note renamed
    
    * changed README
commit 731524da75df7088e8caaad15dbda1600c532c87
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Fri May 5 12:32:50 2023 -0600
    Excalidraw (#31)
    
    * integrated excalidraw to vue
    
    * added more tests
    
    * refactored some components
    
    * change left col width
    
    * fixed dropping issue in treeview, fixed import issue, fixed fontsize in metainfo
commit 45ac04715f4a18cb9180d1e048085aee28dae4ae
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sun Apr 30 14:02:25 2023 -0600
    Layout refactored (#30)
    
    * change options api to composition api
    
    * able to rename window title when item is updated
commit 30376c134ca02f8e678a43b9f72e34a9b8df1f85
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sun Apr 30 00:12:17 2023 -0600
    More pdf tools (#29)
    
    * added rectangular highlight tool
    
    * refactored pdfreader logic
    
    * added some component tests
    
    * improved eventbus logic
    
    * improved github workflow for ci
commit ac5b345c3e3a992ce317783799144bb33e7262f5
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sun Apr 30 00:02:44 2023 -0600
    More pdf tools (#28)
    
    * added rectangular highlight tool
    
    * refactored pdfreader logic
    
    * added some component tests
    
    * improved eventbus logic
    
    * improved github workflow for ci
commit e86d48f5ce53e69b1843df83fe2962333b1d127b
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Wed Apr 19 12:31:28 2023 -0600
    Tests (#25)
    
    * added test tools
    
    * added cypress
    
    * change tsconfig
    
    * added some test
    
    * fixed test.yml
    
    * added cache denpendencies to test.yml
commit e47f3f61a889ff64d341d4b1b14a2c190bec03af
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Fri Apr 7 09:57:08 2023 -0600
    change icons
commit 65731622cc7becb2cf93c571f9b0482f6efee16c
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Mon Apr 3 15:11:46 2023 -0600
    Create LICENSE
commit 4f1c5b69e6bd28990f0eabaec7100e2146615938
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sat Apr 1 20:31:13 2023 -0600
    fixed import errors
commit f3a551d7571a013a435add72b76e34de10f19fed
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sat Apr 1 18:23:54 2023 -0600
    bump electron-builder to 23.6.0 to resolve python issue in mac
commit ee716edc506801d5dfba4e5fd9d2b2c8258034a3
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sat Apr 1 18:23:54 2023 -0600
    change to electron-builder
commit ed846ae791456b8d4d2fbcea26cb097dc46890fc
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sat Apr 1 14:57:01 2023 -0600
    fixed note rename issue in table
commit c695989c10b83c6b2fe62d659fda073a87edb4ff
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sat Apr 1 02:18:02 2023 -0600
    remove bak files
commit 3c76e060f9fbf3f7f52787e15f52c18fee01cfc3
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sat Apr 1 02:11:26 2023 -0600
    refactor library/* using provide / inject
commit ded80e78cd623fce1aee2af59cb004636116a42b
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Thu Mar 30 21:27:44 2023 -0600
    fixed some font-size issues and rename file issue
commit dd29a3c5642b9ecdf4514beed9a456f814a08438
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Thu Mar 30 19:55:17 2023 -0600
    change *.vue in layouts to ts
commit 3d1eb4d5cf4685e4488d4d8331224212427a4bfb
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Thu Mar 30 10:23:05 2023 -0600
    library/*.vue migrate to .ts
commit 4609e44c493da5729b8bd5c4a57c222de6ebd5ec
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Wed Mar 29 14:27:48 2023 -0600
    change .vue in settings to ts
commit bef878c33175bd5afd877df97f3fff41fac38ee2
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Wed Mar 29 11:33:27 2023 -0600
    change a portion of .vue in components to ts
commit e561803c51b2552be329cf3e6357a803823748cc
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Tue Mar 28 09:11:27 2023 -0600
    change .vue in pages to ts
commit deccddaebfb32487e6d95f96707dd0d2d5185e94
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sun Mar 26 18:06:08 2023 -0600
    change pdfreader backend to typescript
commit bc85107d35ec7d1f5e34889315b2351678295f55
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Sun Mar 26 07:39:55 2023 -0600
    change most backends to ts except pdfreader
commit c455e29e2cc4070e7b5e056f3aa797923e8fecfc
Author: Hunt Feng <spacecurvature@gmail.com>
Date:   Fri Mar 24 11:48:06 2023 -0600
    typescript migration in progress

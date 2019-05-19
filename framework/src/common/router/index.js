import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/framework7/Home'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/ActionSheet'
import Accordion from '@/components/framework7/Appbar'
import Accordion from '@/components/framework7/Badge'
import Accordion from '@/components/framework7/Block'
import Accordion from '@/components/framework7/Button'
import Accordion from '@/components/framework7/Cards'
import Accordion from '@/components/framework7/Checkbox'
import Accordion from '@/components/framework7/ChipsNTags'
import Accordion from '@/components/framework7/ContactsList'
import Accordion from '@/components/framework7/FAB'
import Accordion from '@/components/framework7/Gauge'
import Accordion from '@/components/framework7/Grid'
import Accordion from '@/components/framework7/Icon'
import Accordion from '@/components/framework7/Inputs'
import Accordion from '@/components/framework7/Link'
import Accordion from '@/components/framework7/List'
import Accordion from '@/components/framework7/ListButton'
import Accordion from '@/components/framework7/ListIndex'
import Accordion from '@/components/framework7/ListItem'
import Accordion from '@/components/framework7/ListView'
import Accordion from '@/components/framework7/LoginScreen'
import Accordion from '@/components/framework7/Menu'
import Accordion from '@/components/framework7/Messagebar'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'
import Accordion from '@/components/framework7/Accordion'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/f7',
      name: 'F7Home',
      component: Home,
      children: [
        {
          path: 'accordion',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'appbar',
          name: 'F7Appbar',
          component: Appbar
        },
        {
          path: 'badge',
          name: 'F7Badge',
          component: Badge
        },
        {
          path: 'block',
          name: 'F7Block',
          component: Block
        },
        {
          path: 'button',
          name: 'F7Button',
          component: Button
        },
        {
          path: 'cards',
          name: 'F7Card',
          component: Card
        },
        {
          path: 'checkbox',
          name: 'F7Checkbox',
          component: Checkbox
        },
        {
          path: 'chipsntags',
          name: 'F7ChipsNTags',
          component: ChipsNTags
        },
        {
          path: 'contactslist',
          name: 'F7ContactsList',
          component: ContactsList
        },
        {
          path: 'fab',
          name: 'F7FAB',
          component: FAB
        },
        {
          path: 'gauge',
          name: 'F7Gauge',
          component: Gauge
        },,
        {
          path: 'grid',
          name: 'F7Grid',
          component: Grid
        },
        {
          path: 'icon',
          name: 'F7Icon',
          component: Icon
        },
        {
          path: 'inputs',
          name: 'F7Inputs',
          component: Inputs
        },
        {
          path: 'link',
          name: 'F7Link',
          component: Link
        },
        {
          path: 'list',
          name: 'F7List',
          component: List
        },,
        {
          path: 'listbutton',
          name: 'F7ListButton',
          component: ListButton
        },
        {
          path: 'listindex',
          name: 'F7ListIndex',
          component: ListIndex
        },
        {
          path: 'listitem',
          name: 'F7ListItem',
          component: ListItem
        },
        {
          path: 'listview',
          name: 'F7ListView',
          component: ListView
        },
        {
          path: 'loginscreen',
          name: 'F7LoginScreen',
          component: LoginScreen
        },,
        {
          path: 'menu',
          name: 'F7Menu',
          component: Menu
        },
        {
          path: 'messagebar',
          name: 'F7Messagebar',
          component: Messagebar
        },
        {
          path: 'navbar',
          name: 'F7Navbar',
          component: Navbar
        },
        {
          path: 'page',
          name: 'F7Page',
          component: Page
        },
        {
          path: 'panel',
          name: 'F7Panel',
          component: Panel
        },,
        {
          path: 'photobrowser',
          name: 'F7Photobrowser',
          component: Photobrowser
        },
        {
          path: 'popover',
          name: 'F7Popover',
          component: Popover
        },
        {
          path: 'popup',
          name: 'F7Popup',
          component: Popup
        },
        {
          path: 'preloader',
          name: 'F7Preloader',
          component: Preloader
        },
        {
          path: 'progressbar',
          name: 'F7Progressbar',
          component: Progressbar
        },,
        {
          path: 'radio',
          name: 'F7Radio',
          component: Radio
        },
        {
          path: 'rangeslider',
          name: 'F7Rangeslider',
          component: Rangeslider
        },
        {
          path: 'searchbar',
          name: 'F7Searchbar',
          component: Searchbar
        },
        {
          path: 'sheetmodal',
          name: 'F7Sheetmodal',
          component: Sheetmodal
        },
        {
          path: 'skeleton',
          name: 'F7Skeleton',
          component: Skeleten
        },,
        {
          path: 'smartselect',
          name: 'F7SmartSelect',
          component: SmartSelect
        },
        {
          path: 'sortable',
          name: 'F7Sortable',
          component: Sortable
        },
        {
          path: 'statusbar',
          name: 'F7Statusbar',
          component: Statusbar
        },
        {
          path: 'stepper',
          name: 'F7Stepper',
          component: Stepper
        },
        {
          path: 'subnavbar',
          name: 'F7Subnavbar',
          component: SubNavbar
        },,
        {
          path: 'swipeout',
          name: 'F7Swipeout',
          component: Swipeout
        },
        {
          path: 'swiper',
          name: 'F7Swiper',
          component: Swiper
        },
        {
          path: 'tabs',
          name: 'F7Tabs',
          component: Tabs
        },
        {
          path: 'toggle',
          name: 'F7Toggle',
          component: Toggle
        },
        {
          path: 'toolbarntabbar',
          name: 'F7ToolbarNTabbar',
          component: ToolbarNTabbar
        },,
        {
          path: 'treeview',
          name: 'F7Treeview',
          component: Treeview
        },
        {
          path: 'view',
          name: 'F7View',
          component: View
        },
        {
          path: 'virtuallist',
          name: 'F7VirtualList',
          component: VirtualList
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path == '/') {
    next('/f7/list');
  } else {
    next();
  }
})

export default router

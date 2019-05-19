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
          name: 'F7Accordion',
          component: Appbar
        },
        {
          path: 'badge',
          name: 'F7Accordion',
          component: Badge
        },
        {
          path: 'block',
          name: 'F7Accordion',
          component: Block
        },
        {
          path: 'button',
          name: 'F7Accordion',
          component: Button
        },
        {
          path: 'cards',
          name: 'F7Accordion',
          component: Card
        },
        {
          path: 'checkbox',
          name: 'F7Accordion',
          component: Checkbox
        },
        {
          path: 'chipsntags',
          name: 'F7Accordion',
          component: ChipsNTags
        },
        {
          path: 'contactslist',
          name: 'F7Accordion',
          component: ContactsList
        },
        {
          path: 'fab',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'gauge',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'grid',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'icon',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'inputs',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'link',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'list',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'listbutton',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'listindex',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'listitem',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'listview',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'loginscreen',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'menu',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'messagebar',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'navbar',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'page',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'panel',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'photobrowser',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'popover',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'popup',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'preloader',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'progressbar',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'radio',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'rangeslider',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'searchbar',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'sheetmodal',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'skeleton',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'smartselect',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'sortable',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'statusbar',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'stepper',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'subnavbar',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'swipeout',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'swiper',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'tabs',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'toggle',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'tollbarntabbar',
          name: 'F7Accordion',
          component: Accordion
        },,
        {
          path: 'treeview',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'view',
          name: 'F7Accordion',
          component: Accordion
        },
        {
          path: 'virtuallist',
          name: 'F7Accordion',
          component: Accordion
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

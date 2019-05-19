import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/framework7/Home'
import Accordion from '@/components/framework7/Accordion'
import ActionSheet from '@/components/framework7/ActionSheet'
import Appbar from '@/components/framework7/Appbar'
import Badge from '@/components/framework7/Badge'
import Block from '@/components/framework7/Block'
import Button from '@/components/framework7/Button'
import Cards from '@/components/framework7/Cards'
import Checkbox from '@/components/framework7/Checkbox'
import ChipsNTags from '@/components/framework7/ChipsNTags'
import ContactsList from '@/components/framework7/ContactsList'
import FAB from '@/components/framework7/FAB'
import Gauge from '@/components/framework7/Gauge'
import Grid from '@/components/framework7/Grid'
import Icon from '@/components/framework7/Icon'
import Inputs from '@/components/framework7/Inputs'
import Link from '@/components/framework7/Link'
import List from '@/components/framework7/List'
import ListButton from '@/components/framework7/ListButton'
import ListIndex from '@/components/framework7/ListIndex'
import ListItem from '@/components/framework7/ListItem'
import ListView from '@/components/framework7/ListView'
import LoginScreen from '@/components/framework7/LoginScreen'
import Menu from '@/components/framework7/Menu'
import Messagebar from '@/components/framework7/Messagebar'
import Messages from '@/components/framework7/Messages'
import Navbar from '@/components/framework7/Navbar'
import Page from '@/components/framework7/Page'
import Panel from '@/components/framework7/Panel'
import PhotoBrowser from '@/components/framework7/PhotoBrowser'
import Popover from '@/components/framework7/Popover'
import Popup from '@/components/framework7/Popup'
import Preloader from '@/components/framework7/Preloader'
import Progressbar from '@/components/framework7/Progressbar'
import Radio from '@/components/framework7/Radio'
import RangeSlider from '@/components/framework7/RangeSlider'
import Searchbar from '@/components/framework7/Searchbar'
import SheetModal from '@/components/framework7/SheetModal'
import Skeleton from '@/components/framework7/Skeleton'
import SmartSelect from '@/components/framework7/SmartSelect'
import Sortable from '@/components/framework7/Sortable'
import Statusbar from '@/components/framework7/Statusbar'
import Stepper from '@/components/framework7/Stepper'
import SubNavbar from '@/components/framework7/SubNavbar'
import Swipeout from '@/components/framework7/Swipeout'
import Swiper from '@/components/framework7/Swiper'
import Tabs from '@/components/framework7/Tabs'
import Toggle from '@/components/framework7/Toggle'
import ToolbarNTabbar from '@/components/framework7/ToolbarNTabbar'
import Treeview from '@/components/framework7/Treeview'
import View from '@/components/framework7/View'
import VirtualList from '@/components/framework7/VirtualList'

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
          path: 'actionsheet',
          name: 'F7ActionSheet',
          component: ActionSheet
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
          name: 'F7Cards',
          component: Cards
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
          path: 'messages',
          name: 'F7Messages',
          component: Messages
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
          name: 'F7PhotoBrowser',
          component: PhotoBrowser
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
          name: 'F7RangeSlider',
          component: RangeSlider
        },
        {
          path: 'searchbar',
          name: 'F7Searchbar',
          component: Searchbar
        },
        {
          path: 'sheetmodal',
          name: 'F7SheetModal',
          component: SheetModal
        },
        {
          path: 'skeleton',
          name: 'F7Skeleton',
          component: Skeleton
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
  // if(to.path == '/') {
    // next('/f7/list');
  // } else {
    next();
  // }
})

export default router

import "@/scss/app.scss"

import Row from '@/js/components/grid/Row.vue'
import Col from '@/js/components/grid/Col.vue'
import Panel from '@/js/components/panel/Panel.vue'
import Button from '@/js/components/button/Button.vue'
import ButtonGroup from '@/js/components/button/ButtonGroup.vue'
import Icon from '@/js/components/icon/Icon.vue'

import Sidebar from '@/js/components/sidebar/Sidebar.vue'
import SidebarItem from '@/js/components/sidebar/SidebarItem.vue'
import SidebarGroup from '@/js/components/sidebar/SidebarGroup.vue'

import Loading from '@/js/components/helpers/Loading.vue'
import Tag from '@/js/components/tag/Tag.vue'

import Input from '@/js/components/form/Input.vue'
import Textarea from '@/js/components/form/Textarea.vue'
import FormGroup from '@/js/components/form/FormGroup.vue'

import Select from '@/js/components/form/Select.vue'
import Switch from '@/js/components/form/Switch.vue'

import Alert from '@/js/components/alert/Alert.vue'

import Modal from '@/js/components/modal/Modal.vue'

import LoadingBar from '@/js/components/loading-bar'
import Message from '@/js/components/message'

const components = {
	Row,
	Col,
	Panel,
	Button,
	ButtonGroup,
	Icon,
	Sidebar,
	SidebarItem,
	SidebarGroup,
	Loading,
	Tag,
	Input,
	Textarea,
	FormGroup,
	Select,
	Switch,
	Alert,
	LoadingBar,
	Message,
	Modal
}

const prefix = 'X';

function install(Vue) {
	if(install.installed) return

	for(const item in components) {
		if(components[item].name) {
			Vue.component(components[item].name, components[item])
		}
	}

	Vue.prototype.$bar = LoadingBar
	Vue.prototype.$message = Message
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	...components
}
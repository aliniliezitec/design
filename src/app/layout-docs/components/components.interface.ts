export const ComponentsCodeBlocks = [
  {
    html: `
        <div class="d-flex align-items-center nao-sub-navbar">
          <div class="sub-navbar-title">
            <span>Subnavbar title</span>&nbsp;
          </div>
          <div>
            <div class="btn-group dropdown-remove-arrow" ngbDropdown container="body">
              <button class="btn sub-navbar-item" ngbDropdownToggle>
                <i class="nao-icon-additional-options"></i>
              </button>
              <div ngbDropdownMenu class="nao-dropdown-1">
                <a class="dropdown-item" href="javascript:void(0)">Archive</a>
                <a class="dropdown-item" href="javascript:void(0)">Delete</a>
              </div>
            </div>
          </div>
        </div>`
  },
  {
    html: `
      <ul class="nao-nav-breadcrumb">
        <li>
        <a href="javascript:void(0)">Home</a>
        </li>
        <li>
        <a href="javascript:void(0)">Category</a>
        </li>
        <li>
        <a href="javascript:void(0)">Sub-category</a>
        </li>
        <li>
        Current page
        </li>
      </ul>`
  },
  {
    html: `
        <div class="d-flex nao-sub-header align-items-center">
          <div class="nao-title pr-2">Deployment 1</div>
          <div class="vertical-line"></div>
          <div class="nao-subtitle pl-2 mr-6">Weekly</div>
          <button type="button" class="btn btn-simple-primary mr-1">
            Add new Deployment
          </button>
          <button type="button" class="btn btn-simple-primary mr-1">
            Edit Deployment
          </button>
          <span class="nao-badge-pill bg-primary text-white">Demo</span>
        </div>`
  }
];


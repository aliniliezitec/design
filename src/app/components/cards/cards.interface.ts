export const CardsCodeBlocks = [
  {
    html: `
        <div class="card" style="max-width: 760px">
            <div class="card-header">
                Header
            </div>
            <div class="card-body">
                <h6 class="card-title">Special title treatment</h6>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer">
                Footer
            </div>
        </div>`},
  {
    html: `
        <div class="card nao-card-1" style="max-width: 760px">
            <div class="card-header">
                <h5 class="title">Nao card 1</h5>
                <h5 class="card-subtitle">Card subtitle</h5>
            </div>
            <div class="card-body py-5">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer text-right">
                <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`},
  {
    html: `
        <div class="nao-card-sm-dashboard bg-white d-flex align-items-center mr-3 mb-3">
          <div class="d-flex flex-column">
            <span class="nao-card-subtitle">Metric name</span>
            <span class="nao-card-number">00000</span>
            <span class="nao-card-percentage text-success">
              100%
            </span>
          </div>
        </div>

        <div class="nao-card-sm-dashboard bg-white d-flex align-items-center mr-3 mb-3">
          <div class="d-flex flex-column align-items-center mx-auto">
            <span class="nao-card-subtitle">Metric name</span>
            <span class="nao-card-number font-weight-bold">00000</span>
            <span class="nao-card-percentage text-success">
              100%
            </span>
          </div>
        </div>
        `},
  {
    html: `
        <div class="nao-dashboard-lg-card bg-white">
          <div class="d-flex justify-content-between align-items-center title-container">
            <div class="nao-card-title">Card title</div>
            <div class="btn-group" ngbDropdown [placement]="$flow.isRTL() ? 'bottom-left' : 'bottom-right'">
              <button class="btn nao-btn-dropdown-menu-1 btn-no-box-shadow" ngbDropdownToggle>View options
              </button>
              <div class="nao-dropdown-2" ngbDropdownMenu>
                <a class="dropdown-item" href="javascript:void(0)">Currency</a>
                <a class="dropdown-item" href="javascript:void(0)">Percentage</a>
              </div>
            </div>
          </div>
          <div class="nao-dashboard-card-body">

          </div>
        </div>`},
  {
    html: `
            <div class="nao-card-board mr-3 mb-3">
                <p class="m-0 align-middle text-center">Board name</p>
            </div>
            <div class="nao-card-board-2 mb-3">
              <div class="nao-card-name mb-1">Card name</div>
              <div class="nao-board-name">Board name</div>
              <span class="nao-card-info text-right">Board info</span>
            </div>
            `},
  {
    html: `
        <div class="nao-kanban-ticket p-3">
            <div class="ticket-header">
            Ticket name
                <div class="btn-group ticket-options-btn ml-2" ngbDropdown container="body">
                    <button type="button" class="btn ticket-btn btn-no-box-shadow btn-no-min-width" ngbDropdownToggle>
                    </button>
                        <div ngbDropdownMenu class="nao-dropdown-1">
                        <a class="dropdown-item" href="javascript:void(0)" >Delete</a>
                    </div>
                </div>
            </div>
            <div class="ticket-body">
                Ticket body
            </div>
        </div>`},
  {
    html: `
        <div class="nao-kanban-ticket p-3">
          <div class="ticket-header">
            Ticket name
            <div class="btn-group ticket-options-btn ml-2" ngbDropdown container="body">
              <button type="button" class="btn ticket-btn btn-no-box-shadow btn-no-min-width" ngbDropdownToggle>

              </button>
              <div ngbDropdownMenu class="nao-dropdown-1">
                <a class="dropdown-item" href="javascript:void(0)">Delete</a>
              </div>
            </div>
          </div>
          <div class="ticket-body">
            <div class="ticket-field">
              <div class="ticket-label">
                STATUS
              </div>
              <span class="nao-pill-lg bg-warning text-white">Evaluation</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                PRIORITY
              </div>
              <span class="nao-pill-lg bg-danger text-white">High</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                ESTIMATED VALUE
              </div>
              <span class="ticket-text">$12,102</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                ACCOUNT
              </div>
              <span class="nao-pill-lg nao-pill-text-7">Enviromerica</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                PRIMARY CONTACT
              </div>
              <span class="nao-pill-lg nao-pill-text-7">Julian Goduci</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                INTERACTIONS
              </div>
              <span class="nao-pill-lg nao-pill-text-7 text-white">Touch One - Proposal Stage</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                KEY DECISION MAKER
              </div>
              <span class="nao-pill-lg nao-pill-text-7">Tom Joyce</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                EXPECTED CLOSE DATE
              </div>
              <span class="ticket-text">21/12/2019</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                LAST CONTACT
              </div>
              <span class="ticket-text">12/6/2019</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                Owner
              </div>
              <div class="ticket-avatar-icon">
                <span class="badge badge-avatar">
                  Tom Joyce</span>
                <span class="initial-avatar">
                  T
                </span>
              </div>
            </div>

          </div>
        </div>`},
  {
    html: `
            <div class="nao-kanban-lane">
                <div class="nao-lane-header">
                    In progress
                    <div class="btn-group float-right ml-2" ngbDropdown container="body">
                        <button type="button" class="btn ticket-btn btn-no-box-shadow btn-no-min-width" ngbDropdownToggle>
                        </button>
                        <div ngbDropdownMenu class="nao-dropdown-1">
                        <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                        </div>
                    </div>
                </div>
                <div class="nao-lane-footer">
                    <span class="number-cards">0 cards</span>
                    <span class="circle-icon nao-icon-add"></span>
                </div>
            </div>`
  },
  {
    html: `
            <div class="nao-kanban-lane">
                <div class="nao-lane-header">
                        In progress
                        <div class="btn-group float-right ml-2" ngbDropdown container="body">
                            <button type="button" class="btn ticket-btn btn-no-box-shadow btn-no-min-width" ngbDropdownToggle>
                            </button>
                            <div ngbDropdownMenu class="nao-dropdown-1">
                                <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="nao-kanban-ticket p-3">
                    <div class="ticket-header">
                        Ticket name
                        <div class="btn-group ticket-options-btn ml-2" ngbDropdown container="body">
                            <button type="button" class="btn ticket-btn btn-no-box-shadow btn-no-min-width" ngbDropdownToggle>
                            </button>
                            <div ngbDropdownMenu class="nao-dropdown-1">
                                <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                            </div>
                        </div>
                    </div>
                    <div class="ticket-body">
                        <div class="ticket-field">
                            <div class="ticket-label">
                                STATUS
                            </div>
                            <span class="nao-pill-lg bg-warning text-white">Evaluation</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                PRIORITY
                            </div>
                            <span class="nao-pill-lg bg-danger text-white">High</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                ESTIMATED VALUE
                            </div>
                            <span class="ticket-text">$12,102</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                ACCOUNT
                            </div>
                            <span class="nao-pill-lg nao-pill-text-7">Enviromerica</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                PRIMARY CONTACT
                            </div>
                            <span class="nao-pill-lg nao-pill-text-7">Julian Goduci</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                INTERACTIONS
                            </div>
                            <span class="nao-pill-lg nao-pill-text-7 text-white">Touch One - Proposal Stage</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                KEY DECISION MAKER
                            </div>
                            <span class="nao-pill-lg nao-pill-text-7">Tom Joyce</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                EXPECTED CLOSE DATE
                            </div>
                            <span class="ticket-text">21/12/2019</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                LAST CONTACT
                            </div>
                            <span class="ticket-text">12/6/2019</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                Owner
                            </div>
                            <div class="ticket-avatar-icon">
                                <span class="badge badge-avatar">
                                Tom Joyce</span>
                                <span class="initial-avatar">
                                T
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="nao-lane-footer">
                        <span class="number-cards">1 card</span>
                        <span class="circle-icon nao-icon-add"></span>
                    </div>
                </div>`
  },
  {
    html: `
          <div class="nao-blue-rounded-box" style="max-width: 687px; width: 100%; height: 200px">
              <div class="box-header border-bottom">
              Add items
              </div>
              <div class="box-container">
                  <p>Add the items you want to be included in the sales order</p>
              </div>
          </div>`
  },
  {
    html: `
        <div class="d-flex flex-column">
        <img class="mx-auto" src="assets-local/images/logo/naologic-text.svg" width="207px">
            <div class="nao-card-form-1">
            <form>
                <div class="form-group">
                    <label class="nao-label-sm-2">Email</label>
                    <input name="email" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label class="nao-label-sm-2">Password</label>
                    <input name="password" type="password" class="form-control">
                </div>
                <div class="mb-3">
                <button class="btn btn-primary w-100">
                    Login to your account
                </button>
                </div>
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="rememberMe" id="rememberMe">
                    <label class="custom-control-label nao-label-sm-2 pt-1" for="rememberMe">Remember me</label>
                    </label>
                <hr />
                <a href="javascript:void(0)" class="forgot-pass">
                Forgot your password?
                </a>
            </form>
            </div>
            <div class="d-flex align-items-center nao-under-card-message">
                <div>Don’t have an account yet?</div>
                <a href="javascript:void(0)" class="btn btn-outline-only-primary btn-sm">Try for free</a>
            </div>
        </div>`
  },
  {
    html: `
    <div class="d-flex flex-column">
      <img class="mx-auto" src="assets-local/images/logo/naologic-text.svg" width="207px">
      <div class="nao-card-form-1 pt-5">
        <form>
          <div class="headshot">
            <img src="assets-local/images/placeholder/default-avatar.png">
          </div>
          <div class="form-group">
            <label class="nao-label-sm-2">Password</label>
            <input name="password" type="password" class="form-control">
          </div>
          <div class="mb-3">
            <button class="btn btn-primary w-100">
              Continue working
            </button>
          </div>
          <hr />
          <a href="javascript:void(0)" class="forgot-pass">
            Forgot your password?
          </a>
        </form>
      </div>
      <div class="d-flex align-items-center nao-under-card-message">
        <a href="javascript:void(0)" class="simple-link">Log in with another user</a>
      </div>
    </div>`
  },
  {
    html: `
        <div class="d-flex flex-column">
          <img class="mx-auto" src="assets-local/images/logo/naologic-text.svg" width="207px">
          <div class="nao-card-form-1 pt-5">
            <form>
              <div class="bg-danger-light nao-form-message mt-1">
                Your reset link has expired. Please request a new link to reset your password.
                <i class="text-danger nao-icon-warning-1"></i>
              </div>
              <div class="bg-warning-light nao-form-message mt-1">
                If an account is associated with the email entered, you will receive instructions on how to reset your password shortly
                <i class="text-warning nao-icon-warning-1"></i>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary w-100">
                  Send another reset email
                </button>
              </div>
              <hr />
              <span class="already-have-a-user">
                Already have a user?
                <a href="javascript:void(0)">
                  Log-in
                </a>
              </span>
            </form>
          </div>
        </div>`
  }
];
